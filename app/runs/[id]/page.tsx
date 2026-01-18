"use client";

import { useParams } from "next/navigation";
import { RunHeader } from "@/components/run/run-header";
import { MetricCard } from "@/components/run/metric-card";
import { ChartCard } from "@/components/charts/chart-card";
import {
  EquityChart,
  DrawdownChart,
  UnderwaterChart,
  ReturnsHistogramChart,
} from "@/components/charts/run-charts";
import { useRuns } from "@/components/run/run-store";
import { TradesTable } from "@/components/tables/trades-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { logLines } from "@/lib/mock-data/logs";
import { trades } from "@/lib/mock-data/trades";
import { EmptyState } from "@/components/layout/empty-state";
import { LoadingState } from "@/components/layout/loading-state";

export default function RunDetailsPage() {
  const params = useParams();
  const { getRunById } = useRuns();
  const runId = Array.isArray(params?.id) ? params?.id[0] : params?.id;
  const run = runId ? getRunById(runId) : undefined;

  if (!run) {
    return (
      <EmptyState
        title="Run not found"
        description="Select a run from Backtests to inspect details."
        actionLabel="Go to Backtests"
        actionHref="/backtests"
      />
    );
  }

  const configJson = JSON.stringify(
    {
      fees: run.params.fees,
      slippage: run.params.slippage,
      execution: run.params.execution,
      risk: {
        per_trade: run.params.riskPerTrade,
        max_exposure: run.params.maxExposure,
      },
    },
    null,
    2
  );

  return (
    <div className="flex h-full flex-col gap-4">
      <RunHeader run={run} />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
        <MetricCard label="PnL" value={`${run.metrics.pnl.toFixed(1)}%`} tone="profit" />
        <MetricCard label="Sharpe" value={run.metrics.sharpe.toFixed(2)} />
        <MetricCard label="Max DD" value={`${run.metrics.maxDrawdown.toFixed(1)}%`} tone="loss" />
        <MetricCard label="Winrate" value={`${run.metrics.winrate.toFixed(1)}%`} />
        <MetricCard label="Trades" value={`${run.metrics.trades}`} />
        <MetricCard label="Fees impact" value={`${run.metrics.feesImpact.toFixed(1)}%`} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard title="Equity curve" subtitle="Portfolio growth over time">
          <EquityChart />
        </ChartCard>
        <ChartCard title="Drawdown" subtitle="Peak-to-trough decline">
          <DrawdownChart />
        </ChartCard>
        <ChartCard title="Underwater" subtitle="Distance from peak equity">
          <UnderwaterChart />
        </ChartCard>
        <ChartCard title="Returns histogram" subtitle="Distribution of returns">
          <ReturnsHistogramChart />
        </ChartCard>
      </div>

      <div className="rounded-lg border border-border bg-panel">
        <div className="border-b border-border px-4 py-3">
          <div className="text-sm font-semibold text-foreground">Trades</div>
          <div className="text-xs text-muted-foreground">Filtered by run selection.</div>
        </div>
        <TradesTable rows={trades} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-panel">
          <Tabs defaultValue="logs" className="flex h-full flex-col">
            <TabsList className="h-9 rounded-none border-b border-border bg-panel px-3">
              <TabsTrigger value="logs" className="text-xs">
                Logs
              </TabsTrigger>
              <TabsTrigger value="artifacts" className="text-xs">
                Artifacts
              </TabsTrigger>
            </TabsList>
            <TabsContent value="logs" className="flex-1 p-3">
              <ScrollArea className="h-[220px] font-mono text-xs text-muted-foreground">
                {logLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="artifacts" className="flex-1 p-3">
              <div className="space-y-2 text-xs text-muted-foreground">
                {run.artifacts.length === 0 ? (
                  run.status === "running" || run.status === "queued" ? (
                    <LoadingState label="Artifacts are being generated..." />
                  ) : (
                    <div className="rounded-md border border-border bg-panel-subtle p-2">
                      No artifacts yet.
                    </div>
                  )
                ) : (
                  run.artifacts.map((artifact) => (
                    <div
                      key={artifact.id}
                      className="flex items-center justify-between rounded-md border border-border bg-panel-subtle p-2"
                    >
                      <div>{artifact.label}</div>
                      <Badge variant="secondary">{artifact.size}</Badge>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="rounded-lg border border-border bg-panel">
          <div className="border-b border-border px-4 py-3">
            <div className="text-sm font-semibold text-foreground">Reproducibility</div>
            <div className="text-xs text-muted-foreground">
              Commit, dataset version, and raw config.
            </div>
          </div>
          <div className="p-4 text-xs text-muted-foreground">
            <div className="mb-3 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-border bg-panel-subtle p-2">
                <div className="text-[11px] uppercase">Commit</div>
                <div className="font-mono text-foreground">{run.commit}</div>
              </div>
              <div className="rounded-md border border-border bg-panel-subtle p-2">
                <div className="text-[11px] uppercase">Dataset</div>
                <div className="text-foreground">{run.datasetVersion}</div>
              </div>
            </div>
            <Tabs defaultValue="yaml">
              <TabsList className="h-8 bg-panel-subtle">
                <TabsTrigger value="yaml" className="text-xs">
                  YAML
                </TabsTrigger>
                <TabsTrigger value="json" className="text-xs">
                  JSON
                </TabsTrigger>
              </TabsList>
              <TabsContent value="yaml" className="mt-2">
                <pre className="whitespace-pre-wrap rounded-md border border-border bg-panel-subtle p-3 font-mono text-[11px] text-foreground">
                  {run.config}
                </pre>
              </TabsContent>
              <TabsContent value="json" className="mt-2">
                <pre className="whitespace-pre-wrap rounded-md border border-border bg-panel-subtle p-3 font-mono text-[11px] text-foreground">
                  {configJson}
                </pre>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

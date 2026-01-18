"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const expectedFields = ["timestamp", "open", "high", "low", "close", "volume"];
const providedFields = ["timestamp", "open", "high", "low", "close", "volume"];
const missingFields = ["split_adjusted", "dividend"];

export function DataContractIndicator() {
  return (
    <div className="rounded-lg border border-border bg-panel-subtle p-3 text-xs">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-xs font-semibold text-foreground">
          Data contract
        </div>
        <Badge className="border border-status-warning/40 bg-status-warning/20 text-status-warning">
          2 mismatches
        </Badge>
      </div>
      <div className="mb-2">
        <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
          Strategy expects
        </div>
        <div className="mt-1 flex flex-wrap gap-1">
          {expectedFields.map((field) => (
            <span
              key={field}
              className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {field}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-2">
        <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
          Dataset provides
        </div>
        <div className="mt-1 flex flex-wrap gap-1">
          {providedFields.map((field) => (
            <span
              key={field}
              className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {field}
            </span>
          ))}
          {missingFields.map((field) => (
            <span
              key={field}
              className={cn(
                "rounded-full border px-2 py-0.5 text-[11px]",
                "border-status-error/40 text-status-error"
              )}
            >
              {field}
            </span>
          ))}
        </div>
      </div>
      <div className="text-[11px] text-muted-foreground">
        Mismatches highlighted before run.
      </div>
    </div>
  );
}

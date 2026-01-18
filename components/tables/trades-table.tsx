"use client";

import { TradeRow } from "@/lib/mock-data/trades";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TradesTable({ rows }: { rows: TradeRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Trade</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Side</TableHead>
          <TableHead>Entry</TableHead>
          <TableHead>Exit</TableHead>
          <TableHead>PnL</TableHead>
          <TableHead>Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((trade) => (
          <TableRow key={trade.id}>
            <TableCell className="font-mono text-xs text-foreground">
              {trade.id}
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">
              {trade.symbol}
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">
              {trade.side}
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">
              {trade.entry}
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">
              {trade.exit}
            </TableCell>
            <TableCell className={trade.pnl >= 0 ? "text-xs text-profit" : "text-xs text-loss"}>
              {trade.pnl.toFixed(2)}%
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">
              {trade.duration}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

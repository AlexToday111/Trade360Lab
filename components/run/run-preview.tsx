"use client";

export function RunPreview() {
  return (
    <div className="rounded-lg border border-border bg-panel-subtle p-3 text-xs">
      <div className="mb-2 text-xs font-semibold text-foreground">
        Run preview
      </div>
      <div className="grid grid-cols-2 gap-2 text-muted-foreground">
        <div>
          <div className="text-[11px] uppercase">Dataset size</div>
          <div className="text-foreground">14.2 GB</div>
        </div>
        <div>
          <div className="text-[11px] uppercase">Est. runtime</div>
          <div className="text-foreground">1m 32s</div>
        </div>
        <div>
          <div className="text-[11px] uppercase">Warnings</div>
          <div className="text-status-warning">2 minor gaps</div>
        </div>
        <div>
          <div className="text-[11px] uppercase">Artifacts</div>
          <div className="text-foreground">logs, report</div>
        </div>
      </div>
    </div>
  );
}

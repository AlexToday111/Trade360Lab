"use client";

import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div>
        <div className="text-lg font-semibold text-foreground">Settings</div>
        <div className="text-xs text-muted-foreground">
          Workspace preferences and environment configuration.
        </div>
      </div>
      <Card className="border-border bg-panel p-4 text-xs text-muted-foreground">
        Settings panel placeholder. Extend with API keys, storage, and layout
        presets.
      </Card>
    </div>
  );
}

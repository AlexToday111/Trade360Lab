"use client";

import { EmptyState } from "@/components/layout/empty-state";

export default function DeployPage() {
  return (
    <EmptyState
      title="Deploy is disabled"
      description="Feature flag hides deployment tools until enabled."
    />
  );
}

"use client";

import { GripVertical } from "lucide-react";
import { Separator } from "react-resizable-panels";
import { cn } from "@/lib/utils";

export function ResizableHandle({ className }: { className?: string }) {
  return (
    <Separator
      className={cn(
        "group relative flex h-full w-1.5 items-center justify-center bg-border/50 transition hover:bg-primary/40",
        className
      )}
    >
      <GripVertical className="h-3 w-3 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
    </Separator>
  );
}

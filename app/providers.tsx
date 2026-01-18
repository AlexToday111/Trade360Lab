"use client";

import { ReactNode } from "react";
import { RunStoreProvider } from "@/components/run/run-store";

export function Providers({ children }: { children: ReactNode }) {
  return <RunStoreProvider>{children}</RunStoreProvider>;
}

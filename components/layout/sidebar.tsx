"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Code2,
  Database,
  Activity,
  Beaker,
  Rocket,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SHOW_DEPLOY = false;

const navItems = [
  { label: "Workspace", href: "/workspace", icon: LayoutGrid },
  { label: "Code", href: "/code", icon: Code2 },
  { label: "Data", href: "/data", icon: Database },
  { label: "Backtests", href: "/backtests", icon: Activity },
  { label: "Research", href: "/research", icon: Beaker },
  { label: "Deploy", href: "/deploy", icon: Rocket, gated: true },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-56 flex-col border-r border-border bg-panel px-3 py-4">
      <div className="flex items-center gap-2 px-2 pb-4 text-sm font-semibold tracking-tight text-foreground">
        <div className="h-2 w-2 rounded-full bg-primary" />
        TradeLab
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {navItems
          .filter((item) => (item.gated ? SHOW_DEPLOY : true))
          .map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-2 text-sm transition",
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-panel-strong hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
      </nav>
      <div className="rounded-md border border-border bg-panel-subtle p-3 text-xs text-muted-foreground">
        Run-centered UX
        <div className="mt-1 font-mono text-[11px] text-muted-foreground">
          v0.1 mock
        </div>
      </div>
    </aside>
  );
}

export type FileNode = {
  name: string;
  type: "folder" | "file";
  children?: FileNode[];
};

export const fileTree: FileNode[] = [
  {
    name: "strategies",
    type: "folder",
    children: [
      { name: "atlas_momentum.py", type: "file" },
      { name: "orbit_reversion.py", type: "file" },
      { name: "ridge_carry.py", type: "file" },
    ],
  },
  {
    name: "data_pipelines",
    type: "folder",
    children: [
      { name: "equities_us.yaml", type: "file" },
      { name: "etfs_intraday.yaml", type: "file" },
    ],
  },
  {
    name: "configs",
    type: "folder",
    children: [
      { name: "backtest_base.yaml", type: "file" },
      { name: "risk_profiles.yaml", type: "file" },
    ],
  },
  {
    name: "reports",
    type: "folder",
    children: [{ name: "atlas_summary.md", type: "file" }],
  },
];

export const pinnedFiles = [
  "strategies/atlas_momentum.py",
  "configs/backtest_base.yaml",
  "reports/atlas_summary.md",
];

export const logLines = [
  "[18:42:01] INFO  Run initialized: run_8f2c",
  "[18:42:04] INFO  Loaded dataset Equities US v13 (14.2 GB)",
  "[18:42:11] INFO  Strategy config validated (risk: 0.5%)",
  "[18:42:19] INFO  Backtest started: 2018-01-01 -> 2024-12-31",
  "[18:42:32] WARN  3 missing candles filled via forward-fill",
  "[18:43:10] INFO  Trades generated: 842",
  "[18:43:26] INFO  PnL 18.4% | Sharpe 1.62 | Max DD -9.7%",
  "[18:43:40] INFO  Artifacts saved to /reports/run_8f2c",
];

export const consoleLines = [
  "$ trade run --strategy atlas_momentum.py --dataset equities_us:v13",
  "Validating data contract... ok",
  "Estimated dataset size: 14.2 GB",
  "Expected runtime: 1m 32s",
  "Run queued (id: run_8f2c)",
];

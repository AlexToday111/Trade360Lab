export type StrategyStatus = "VALID" | "INVALID" | string;

export type Strategy = {
  id: number | string;
  name: string | null;
  fileName: string;
  status: StrategyStatus;
  validationError: string | null;
  parametersSchema: Record<string, unknown> | null;
  createdAt: string;
};

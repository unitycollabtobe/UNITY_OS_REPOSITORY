import { DecisionResult } from "./DecisionTypes";

export function recommendationId(
  decision: DecisionResult
): string {
  return `REC_${decision.nextAction}`;
}
import { UnityContext } from "../context/UnityContext";
import { DecisionResult } from "./DecisionTypes";
import { Recommendation } from "./RecommendationTypes";

export interface UnityState {
  context: UnityContext;

  decision: DecisionResult;

  recommendation: Recommendation;

  initialized: boolean;

  updatedAt: Date;
}
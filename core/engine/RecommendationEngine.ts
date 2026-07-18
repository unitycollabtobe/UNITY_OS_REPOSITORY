import { DecisionResult } from "./DecisionTypes";
import { Recommendation } from "./RecommendationTypes";
import { recommendationId } from "./RecommendationHelpers";

export class RecommendationEngine {
  build(decision: DecisionResult): Recommendation {
    const rewards: Record<DecisionResult["nextAction"], number> = {
      SETUP_ACCOUNT: 10,
      CHOOSE_PATH: 20,
      BOOK_MEETING: 30,
      UPLOAD_FIRST_UTILITY: 50,
      WAIT_REVIEW: 0,
      START_MISSION: 100,
      OPEN_ROADMAP: 0,
    };

    const minutes: Record<DecisionResult["nextAction"], number> = {
      SETUP_ACCOUNT: 3,
      CHOOSE_PATH: 2,
      BOOK_MEETING: 2,
      UPLOAD_FIRST_UTILITY: 5,
      WAIT_REVIEW: 0,
      START_MISSION: 10,
      OPEN_ROADMAP: 1,
    };

    return {
      id: recommendationId(decision),

      title: decision.title,

      description: decision.description,

      cta: "Continua",

      priority: decision.priority,

      xpReward: rewards[decision.nextAction],

      mascot: "Enrico",

      animation: decision.priority === "high" ? "glow" : "pulse",

      estimatedMinutes: minutes[decision.nextAction],
    };
  }
}
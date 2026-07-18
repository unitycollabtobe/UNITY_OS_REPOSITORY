export type RecommendationPriority = "low" | "medium" | "high";

export type RecommendationMascot =
  | "Enrico"
  | "Davide"
  | "System";

export type RecommendationAnimation =
  | "glow"
  | "pulse"
  | "none";

export interface Recommendation {
  id: string;

  title: string;

  description: string;

  cta: string;

  priority: RecommendationPriority;

  xpReward: number;

  mascot: RecommendationMascot;

  animation: RecommendationAnimation;

  estimatedMinutes: number;
}
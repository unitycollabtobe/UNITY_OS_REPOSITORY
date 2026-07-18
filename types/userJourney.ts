// ===========================================
// UNITY OS
// User Journey Model
// Version: 1.0
// ===========================================

export interface UserJourney {
  userId: string;

  currentMilestoneId: string;

  progress: number;

  completed: boolean;

  startedAt: Date;

  updatedAt: Date;
}
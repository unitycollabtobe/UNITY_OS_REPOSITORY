// ===========================================
// UNITY OS
// User Milestone Model
// Version: 1.0
// ===========================================

export interface UserMilestone {
  userId: string;

  milestoneId: string;

  progress: number;

  completed: boolean;

  unlocked: boolean;

  completedAt?: Date;
}
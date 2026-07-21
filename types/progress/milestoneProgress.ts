// ===========================================
// UNITY OS
// Milestone Progress
// Version: 1.0
// ===========================================

export interface MilestoneProgress {

  userId: string;

  milestoneId: string;

  current: number;

  target: number;

  progress: number;

  unlocked: boolean;

  completed: boolean;

  startedAt?: Date;

  completedAt?: Date;

  updatedAt?: Date;

}
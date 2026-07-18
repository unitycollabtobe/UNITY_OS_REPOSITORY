// ===========================================
// UNITY OS
// Journey Model
// Version: 2.0
// ===========================================

export type JourneyMode =
  | "standard"
  | "identity";

export type JourneyStatus =
  | "not_started"
  | "in_progress"
  | "completed";

export interface Journey {

  id: string;

  userId: string;

  mode: JourneyMode;

  status: JourneyStatus;

  currentStep: number;

  currentMilestoneId?: string;

  currentMissionId?: string;

  completedMissionIds: string[];

  progress: number;

  startedAt?: Date;

  completedAt?: Date;

  updatedAt: Date;

}
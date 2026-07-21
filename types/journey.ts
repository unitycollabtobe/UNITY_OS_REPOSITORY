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

export type JourneyPhase =
  | "preparation"
  | "onboarding"
  | "activation"
  | "operations"
  | "consistency"
  | "growth"
  | "leadership"
  | "mentoring";

export interface Journey {

  id: string;

  userId: string;

  mode: JourneyMode;

  status: JourneyStatus;

  currentPhase: JourneyPhase;

  currentMilestoneId?: string;

  currentMissionId?: string;

  startedAt?: Date;

  completedAt?: Date;

  updatedAt: Date;

}
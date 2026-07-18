// ===========================================
// UNITY OS
// Mission Model
// Version: 3.1
// ===========================================

export type MissionType =
  | "upload"
  | "invite"
  | "meeting"
  | "training"
  | "library"
  | "journey";

export type MissionPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export interface MissionStep {

  id: string;

  title: string;

}

export interface Mission {

  id: string;

  milestoneId: string;

  order: number;

  title: string;

  description: string;

  objective: string;

  icon: string;

  guideId?: string;

  type: MissionType;

  target: number;

  optional: boolean;

  actionLabel: string;

  route: string;

  steps: MissionStep[];

  priority: MissionPriority;

  estimatedTime: string;

  rewardXP: number;

}
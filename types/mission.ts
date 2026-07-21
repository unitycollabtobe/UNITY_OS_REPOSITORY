// ===========================================
// UNITY OS
// Mission Model
// Version: 4.0
// ===========================================

export type MissionType =
  | "upload"
  | "invite"
  | "meeting"
  | "training"
  | "library"
  | "journey";

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

  steps: MissionStep[];

  estimatedMinutes: number;

}
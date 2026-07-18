// ===========================================
// UNITY OS
// Assessment Model
// Version: 1.0
// ===========================================

export type GrowthProfile =
  | "explorer"
  | "builder"
  | "leader"
  | "mentor"
  | "ambassador";

export interface Assessment {

  userId: string;

  collaborators: number;

  utilities: number;

  growthProfile: GrowthProfile;

  completedMissionIds: string[];

  unlockedMilestoneIds: string[];

  createdAt: Date;

}
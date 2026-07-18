export type ActionStatus =
  | "locked"
  | "available"
  | "in_progress"
  | "completed"
  | "skipped";

export type ActionType =
  | "read"
  | "watch"
  | "upload"
  | "meeting"
  | "invite"
  | "questionnaire"
  | "confirmation"
  | "task";

export type ActionPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export type ActionEngine =
  | "assessment"
  | "mission"
  | "library"
  | "upload"
  | "meeting"
  | "invite"
  | "roadmap"
  | "dashboard"
  | "identity"
  | "growth";

export interface UnityActionReward {
  xp?: number;
  badgeId?: string;
  unlockMissionId?: string;
}

export interface UnityActionRequirement {
  actionId: string;
  completed: boolean;
}

export interface UnityAction {

  id: string;

  missionId: string;

  engine: ActionEngine;

  title: string;

  description: string;

  type: ActionType;

  status: ActionStatus;

  priority: ActionPriority;

  order: number;

  estimatedMinutes: number;

  mandatory: boolean;

  requirements: UnityActionRequirement[];

  reward?: UnityActionReward;

  target?: string;

  buttonLabel?: string;

  icon?: string;

  category?: string;

  createdAt: string;

  updatedAt: string;

}
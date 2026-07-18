// ===========================================
// UNITY OS
// User Mission Model
// Version: 1.1
// ===========================================

export interface UserMission {

  userId: string;

  missionId: string;

  progress: number;

  completed: boolean;

  startedAt?: string;

  completedAt?: string;

  createdAt: string;

  updatedAt: string;

}
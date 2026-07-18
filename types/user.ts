// ===========================================
// UNITY OS - USER MODEL
// ===========================================

export type UserRole =
  | "guest"
  | "collaborator"
  | "speaker"
  | "admin";

export type JourneyMode =
  | "standard"
  | "identity";

export type UserStatus =
  | "pending"
  | "active"
  | "suspended";

export type UserPhase =
  | "guest"
  | "onboarding"
  | "learning"
  | "building"
  | "supporting";

export interface User {

  // Identity
  id: string;
  unityCode: string;

  firstName: string;
  lastName: string;
  email: string;

  avatar?: string;

  // Role
  role: UserRole;
  status: UserStatus;

  // Journey
  journeyMode: JourneyMode;
  phase: UserPhase;
  roadmapStep: number;
  missionId: string;

  // Referral
  sponsorId?: string;

  // Dates
  createdAt: Date;
  updatedAt: Date;

}
// ===========================================
// UNITY OS
// Mock User Profile
// Version: 2.2
// ===========================================

import { UserProfile } from "@/types/user/userProfile";

import { UserRole } from "@/types/enums/UserRole";
import { AccountStatus } from "@/types/enums/AccountStatus";

export const mockUserProfile: UserProfile = {
  user: {
    id: "USR-001",

    unityCode: "UNITY-0001",

    firstName: "Simone",

    lastName: "Adamo",

    email: "simone@email.it",

    role: UserRole.COLLABORATOR,

    status: AccountStatus.ACTIVE,

    sponsorId: "UNITY-0000",

    createdAt: new Date(),

    updatedAt: new Date(),
  },

  journey: {
    id: "JRN-001",

    userId: "USR-001",

    mode: "identity",

    status: "in_progress",

    currentPhase: "onboarding",

    currentMilestoneId: "MIL-001",

    currentMissionId: "MIS-001",

    startedAt: new Date(),

    updatedAt: new Date(),
  },

  assessment: {} as any,
};
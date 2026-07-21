// ===========================================
// UNITY OS
// Mock User Profile
// Version: 1.0
// ===========================================

import { UserProfile } from "@/types/userProfile";

export const mockUserProfile: UserProfile = {

  user: {
    id: "USR-001",
    unityCode: "UNITY-0001",

    firstName: "Simone",
    lastName: "Adamo",

    email: "simone@email.it",

    role: "collaborator",

    status: "active",

    journeyMode: "identity",

    phase: "learning",

    roadmapStep: 1,

    missionId: "MIS-001",

    sponsorId: "UNITY-0000",

    createdAt: new Date(),

    updatedAt: new Date(),
  },

  journey: {

    userId: "USR-001",

    currentMilestoneId: "MIL-001",

    progress: 25,

    completed: false,

    startedAt: new Date(),

    updatedAt: new Date(),
  },

  milestones: [

    {

      userId: "USR-001",

      milestoneId: "MIL-001",

      progress: 25,

      completed: false,

      unlocked: true,
    }

  ],

 missions: [

  {

    userId: "USR-001",

    missionId: "MIS-001",

    progress: 0,

    completed: false,

    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString(),

  }

]

};
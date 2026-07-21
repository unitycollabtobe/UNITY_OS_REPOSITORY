import { UserMission } from "@/types/progress/userMission";

export const userMissions: UserMission[] = [
  {
    userId: "USR-001",
    missionId: "MIS-001",
    progress: 0,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
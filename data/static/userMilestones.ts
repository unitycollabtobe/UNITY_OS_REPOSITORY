import { MilestoneProgress } from "@/types/milestoneProgress";

export const userMilestones: MilestoneProgress[] = [

  {
    userId: "USR-001",

    milestoneId: "MIL-001",

    current: 1,

    target: 4,

    progress: 25,

    unlocked: true,

    completed: false,
  },

  {
    userId: "USR-001",

    milestoneId: "MIL-002",

    current: 0,

    target: 4,

    progress: 0,

    unlocked: false,

    completed: false,
  },

  {
    userId: "USR-001",

    milestoneId: "MIL-003",

    current: 0,

    target: 1,

    progress: 0,

    unlocked: false,

    completed: false,
  },

];
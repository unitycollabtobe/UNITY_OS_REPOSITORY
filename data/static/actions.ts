import { UnityAction } from "@/types/action";

export const actions: UnityAction[] = [
  {
    id: "ACT-001",
    missionId: "MIS-001",
    engine: "library",
    title: "Leggi la guida introduttiva",
    description: "Apri e leggi la guida introduttiva di Unity.",
    type: "read",
    status: "available",
    priority: "normal",
    order: 1,
    estimatedMinutes: 5,
    mandatory: true,
    requirements: [],
    reward: {
      xp: 20,
    },
    target: "/library",
    buttonLabel: "Apri guida",
    icon: "book",
    category: "onboarding",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
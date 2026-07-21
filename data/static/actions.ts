import { UnityAction } from "@/types/journey/action";

export const actions: UnityAction[] = [
  {
    id: "ACT-001",

    missionId: "MIS-001",

    engine: "library",

    title: "Leggi la guida introduttiva",

    description: "Apri e leggi la guida introduttiva di Unity.",

    type: "read",

    order: 1,

    estimatedMinutes: 5,

    mandatory: true,

    requirements: [],

    target: "/library",
  },
];
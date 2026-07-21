import { Mission } from "@/types/journey/mission";

export const missions: Mission[] = [
  {
    id: "MIS-001",
    milestoneId: "MIL-001",
    order: 1,

    title: "Carica la tua prima utenza",

    description: "Inserisci la tua prima utenza personale.",

    objective: "Compi il primo passo concreto nel tuo percorso.",

    icon: "⚡",

    guideId: "AI-SIMONE",

    type: "upload",

    target: 1,

    optional: false,

    steps: [
      {
        id: "STEP-001",
        title: "Apri la sezione Upload",
      },
      {
        id: "STEP-002",
        title: "Inserisci la prima utenza",
      },
      {
        id: "STEP-003",
        title: "Conferma il caricamento",
      },
    ],

    estimatedMinutes: 5,
  },

  {
    id: "MIS-002",
    milestoneId: "MIL-001",
    order: 2,

    title: "Invita il tuo primo ospite",

    description: "Condividi il tuo link personale.",

    objective: "Imparare a presentare Unity.",

    icon: "🤝",

    guideId: "AI-SIMONE",

    type: "invite",

    target: 1,

    optional: false,

    steps: [],

    estimatedMinutes: 10,
  },

  {
    id: "MIS-003",
    milestoneId: "MIL-001",
    order: 3,

    title: "Invia il primo preventivo",

    description: "Completa il tuo primo preventivo.",

    objective: "Imparare a utilizzare il sistema.",

    icon: "📄",

    guideId: "AI-SIMONE",

    type: "upload",

    target: 1,

    optional: false,

    steps: [],

    estimatedMinutes: 15,
  },

  {
    id: "MIS-004",
    milestoneId: "MIL-001",
    order: 4,

    title: "Guarda il Vademecum",

    description: "Consulta il materiale introduttivo di Unity.",

    objective: "Conoscere le basi del progetto.",

    icon: "📚",

    guideId: "AI-ENRICO",

    type: "training",

    target: 1,

    optional: true,

    steps: [],

    estimatedMinutes: 20,
  },
];
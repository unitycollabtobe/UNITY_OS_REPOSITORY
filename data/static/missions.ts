import { Mission } from "@/types/mission";

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

    actionLabel: "Carica utenza",

    route: "/os/upload",

    steps: [
      {
        id: "STEP-001",
        title: "Apri la sezione Upload",
        completed: true,
      },
      {
        id: "STEP-002",
        title: "Inserisci la prima utenza",
        completed: false,
      },
      {
        id: "STEP-003",
        title: "Conferma il caricamento",
        completed: false,
      },
    ],

    priority: "Alta",

    estimatedTime: "5 minuti",

    reward: "Prima utenza completata 🎉",
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

    actionLabel: "Invita",

    route: "/os/invite",

    steps: [],

    priority: "Media",

    estimatedTime: "10 minuti",

    reward: "Primo invito inviato",
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

    actionLabel: "Invia preventivo",

    route: "/os/preventivi",

    steps: [],

    priority: "Media",

    estimatedTime: "15 minuti",

    reward: "Preventivo inviato",
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

    actionLabel: "Apri Vademecum",

    route: "/os/library",

    steps: [],

    priority: "Bassa",

    estimatedTime: "20 minuti",

    reward: "Conoscenze iniziali acquisite",
  },
];
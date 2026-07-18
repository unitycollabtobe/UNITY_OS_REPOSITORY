import { Milestone } from "@/types/milestone";

export const milestones: Milestone[] = [
  {
    id: "MIL-001",
    order: 1,
    title: "Benvenuto",
    subtitle: "Inizia il tuo percorso",
    description:
      "Scegli il percorso più adatto a te e completa i tuoi primi passi all'interno di Unity.",
    icon: "🌱",
    status: "available",
    missionIds: ["MIS-001", "MIS-002", "MIS-003", "MIS-004"],
  },

  {
    id: "MIL-002",
    order: 2,
    title: "Le Fondamenta",
    subtitle: "Acquisisci sicurezza",
    description:
      "Conosci gli strumenti, partecipa ai primi meeting e completa la tua formazione iniziale.",
    icon: "📚",
    status: "locked",
    missionIds: ["MIS-005", "MIS-006", "MIS-007", "MIS-008"],
  },

  {
    id: "MIL-003",
    order: 3,
    title: "Autonomia",
    subtitle: "Diventa indipendente",
    description:
      "Completa le tue 8 utenze personali e acquisisci piena autonomia nel sistema.",
    icon: "🚀",
    status: "locked",
    missionIds: ["MIS-009"],
  },

  {
    id: "MIL-004",
    order: 4,
    title: "Nasce la tua rete",
    subtitle: "Costruisci la prima linea",
    description:
      "Trova e accompagna i tuoi primi collaboratori fino alla loro autonomia.",
    icon: "🤝",
    status: "locked",
    missionIds: ["MIS-010", "MIS-011", "MIS-012"],
  },

  {
    id: "MIL-005",
    order: 5,
    title: "Duplicazione",
    subtitle: "Insegna il metodo",
    description:
      "Aiuta i tuoi collaboratori a diventare autonomi e a costruire la loro rete.",
    icon: "🌍",
    status: "locked",
    missionIds: ["MIS-013", "MIS-014"],
  },

  {
    id: "MIL-006",
    order: 6,
    title: "Leadership",
    subtitle: "Diventa un punto di riferimento",
    description:
      "Partecipa alle formazioni, ai meeting e sviluppa le competenze di leadership.",
    icon: "⭐",
    status: "locked",
    missionIds: ["MIS-015", "MIS-016"],
  },

  {
    id: "MIL-007",
    order: 7,
    title: "Espansione",
    subtitle: "Accompagna la crescita",
    description:
      "Consolida la tua rete e continua a supportare la crescita delle persone.",
    icon: "📈",
    status: "locked",
    missionIds: ["MIS-017"],
  },

  {
    id: "MIL-008",
    order: 8,
    title: "Unity Master",
    subtitle: "Il percorso continua",
    description:
      "Hai costruito una rete autonoma. Ora puoi dedicarti all'innovazione, alla formazione e al miglioramento di Unity.",
    icon: "🏆",
    status: "locked",
    missionIds: ["MIS-018"],
  },
];
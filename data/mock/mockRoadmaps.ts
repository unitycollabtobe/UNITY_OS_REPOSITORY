import { Roadmap } from "@/types/roadmap";

export const mockRoadmaps: Roadmap[] = [

  {
    id: "ROADMAP_STANDARD",

    title: "Percorso Standard",

    description:
      "Percorso flessibile per chi desidera avanzare con i propri tempi.",

    path: "standard",

    milestoneIds: [],

    estimatedMonths: 16,

    active: true,
  },

  {
    id: "ROADMAP_IDENTITY",

    title: "Percorso Identity",

    description:
      "Percorso guidato con obiettivi consigliati da Unity.",

    path: "identity",

    milestoneIds: [],

    estimatedMonths: 16,

    active: true,
  },

];
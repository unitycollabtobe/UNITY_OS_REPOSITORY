export const mockMission = {
  id: "MIS-001",

  title: "Carica la tua prima utenza",

  description:
    "Questa missione ti accompagnerà nel primo passo del tuo percorso in Unity.",

  progress: 25,

  totalSteps: 4,

  completedSteps: 1,

  priority: "Alta",

  reward: "Prima Missione Completata",

  estimatedTime: "10 minuti",

  action: "Continua il percorso",

  guide: "Come inserire la prima utenza",

  steps: [
    {
      id: 1,
      title: "Invia il preventivo",
      completed: true,
    },
    {
      id: 2,
      title: "Attendi la risposta",
      completed: false,
    },
    {
      id: 3,
      title: "Prenota un incontro",
      completed: false,
    },
    {
      id: 4,
      title: "Inserisci la prima utenza",
      completed: false,
    },
  ],
};
import { DecisionResult } from "./DecisionTypes";

export const DecisionRules = {

  ACCOUNT_SETUP: {
    nextAction: "SETUP_ACCOUNT",
    title: "Completa il tuo profilo",
    description: "Configura il tuo account per iniziare.",
    priority: "high",
    completed: false,
    progress: 5,
  } satisfies DecisionResult,

  CHOOSE_PATH: {
    nextAction: "CHOOSE_PATH",
    title: "Scegli il tuo percorso",
    description: "Seleziona Standard oppure Identity.",
    priority: "high",
    completed: false,
    progress: 10,
  } satisfies DecisionResult,

  BOOK_MEETING: {
    nextAction: "BOOK_MEETING",
    title: "Prenota il meeting introduttivo",
    description: "Prenota il tuo primo incontro con un relatore.",
    priority: "high",
    completed: false,
    progress: 15,
  } satisfies DecisionResult,

  UPLOAD_FIRST_UTILITY: {
    nextAction: "UPLOAD_FIRST_UTILITY",
    title: "Carica la tua prima utenza",
    description: "Invia una bolletta per iniziare il percorso.",
    priority: "high",
    completed: false,
    progress: 20,
  } satisfies DecisionResult,

  WAIT_REVIEW: {
    nextAction: "WAIT_REVIEW",
    title: "Attendi la verifica",
    description: "Stiamo analizzando la tua utenza.",
    priority: "medium",
    completed: false,
    progress: 40,
  } satisfies DecisionResult,

  START_MISSION: {
    nextAction: "START_MISSION",
    title: "Inizia la prossima missione",
    description: "È disponibile una nuova missione.",
    priority: "medium",
    completed: false,
    progress: 60,
  } satisfies DecisionResult,

  OPEN_ROADMAP: {
    nextAction: "OPEN_ROADMAP",
    title: "Continua il tuo percorso",
    description: "Apri la roadmap e scegli il prossimo obiettivo.",
    priority: "low",
    completed: false,
    progress: 100,
  } satisfies DecisionResult,

} as const;
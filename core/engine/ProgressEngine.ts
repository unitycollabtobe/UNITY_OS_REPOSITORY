// ===========================================
// UNITY OS
// Progress Engine
// Version: 2.0
// ===========================================

import { UnityCompletion } from "@/types/journey/completion";

import { BaseEngine } from "./BaseEngine";

export class ProgressEngine extends BaseEngine {

  constructor() {
    super();
  }

  /**
   * Calcola la percentuale di completamento
   * di un insieme di azioni.
   */
  calculateProgress(
    completions: UnityCompletion[]
  ): number {

    if (completions.length === 0) {
      return 0;
    }

    const completed = completions.filter(
      item => item.status === "completed"
    ).length;

    return Math.round(
      (completed / completions.length) * 100
    );

  }

}
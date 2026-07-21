// ===========================================
// UNITY OS
// Growth Engine
// Version: 1.1
// ===========================================

import { UnityCompletion } from "@/types/journey/completion";

import { BaseEngine } from "./BaseEngine";

export class GrowthEngine extends BaseEngine {

  constructor() {
    super();
  }

  /**
   * Calcola il progresso del collaboratore.
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
// ===========================================
// UNITY OS
// Completion Engine
// Version: 1.2
// ===========================================

import { completions } from "@/data/static/completions";

import { UnityCompletion } from "@/types/journey/completion";

import { BaseEngine } from "./BaseEngine";

export class CompletionEngine extends BaseEngine {

  constructor() {
    super();
  }

  /**
   * Restituisce tutti i completamenti.
   */
  getAll(): UnityCompletion[] {
    return completions;
  }

  /**
   * Restituisce i completamenti di un collaboratore.
   */
  getByUser(userId: string): UnityCompletion[] {
    return completions.filter(
      item => item.userId === userId
    );
  }

  /**
   * Cerca un completamento tramite ID.
   */
  getById(id: string): UnityCompletion | undefined {
    return completions.find(
      item => item.id === id
    );
  }

  /**
   * Verifica se un'azione è completata.
   */
  isCompleted(
    userId: string,
    actionId: string
  ): boolean {

    return completions.some(
      item =>
        item.userId === userId &&
        item.actionId === actionId &&
        item.status === "completed"
    );

  }

}
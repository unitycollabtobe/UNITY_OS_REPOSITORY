// ===========================================
// UNITY OS
// Completion Engine
// Version: 2.0
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
   * Restituisce tutti i completamenti di un collaboratore.
   */
  getByUser(userId: string): UnityCompletion[] {
    return completions.filter(
      item => item.userId === userId
    );
  }

  /**
   * Restituisce tutti i completamenti di un'azione.
   */
  getByAction(actionId: string): UnityCompletion[] {
    return completions.filter(
      item => item.actionId === actionId
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
   * Verifica se un collaboratore ha completato un'azione.
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
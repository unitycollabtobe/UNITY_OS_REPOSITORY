// ===========================================
// UNITY OS
// Completion Model
// Version: 2.0
// ===========================================

export type CompletionStatus =
  | "pending"
  | "completed"
  | "failed"
  | "skipped";

export interface UnityCompletion {

  /**
   * Identificatore univoco.
   */
  id: string;

  /**
   * Collaboratore.
   */
  userId: string;

  /**
   * Azione completata.
   */
  actionId: string;

  /**
   * Esito del completamento.
   */
  status: CompletionStatus;

  /**
   * Inizio dell'esecuzione.
   */
  startedAt?: string;

  /**
   * Fine dell'esecuzione.
   */
  completedAt?: string;

  /**
   * Tempo impiegato.
   */
  durationMinutes?: number;

  /**
   * Data creazione record.
   */
  createdAt: string;

  /**
   * Ultimo aggiornamento.
   */
  updatedAt: string;

}
// ===========================================
// UNITY OS
// Meeting Recurrence Model
// Version: 1.0
// ===========================================

/**
 * Tipo di ricorrenza del Meeting.
 */
export type MeetingRecurrenceType =
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly";

/**
 * MeetingRecurrence
 *
 * Definisce la regola di ricorrenza
 * associata ad un Meeting.
 *
 * La ricorrenza descrive esclusivamente
 * la frequenza con cui il Meeting deve
 * ripetersi.
 *
 * La creazione delle singole istanze
 * del Meeting è responsabilità del
 * Meeting Engine.
 */
export interface MeetingRecurrence {

  /**
   * Identificativo univoco della ricorrenza.
   */
  id: string;

  /**
   * Meeting associato.
   */
  meetingId: string;

  /**
   * Tipo di ricorrenza.
   */
  type: MeetingRecurrenceType;

  /**
   * Intervallo della ricorrenza.
   *
   * Esempi:
   *
   * weekly + interval = 1
   * → ogni settimana
   *
   * weekly + interval = 2
   * → ogni due settimane
   *
   * monthly + interval = 3
   * → ogni tre mesi
   */
  interval: number;

  /**
   * Data di inizio della ricorrenza.
   */
  startsAt: string;

  /**
   * Data di fine della ricorrenza.
   *
   * Opzionale.
   */
  endsAt?: string;

  /**
   * Numero massimo di occorrenze.
   *
   * Alternativo a endsAt.
   */
  occurrences?: number;

}
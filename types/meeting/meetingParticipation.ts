// ===========================================
// UNITY OS
// Meeting Participation Model
// Version: 1.0
// ===========================================

/**
 * Stato della partecipazione ad un Meeting.
 */
export type MeetingParticipationStatus =
  | "pending"
  | "booked"
  | "cancelled";

/**
 * MeetingParticipation
 *
 * Rappresenta il rapporto tra un collaboratore
 * ed uno specifico Meeting.
 *
 * Ogni partecipazione è indipendente dal Meeting
 * e descrive esclusivamente lo stato della
 * partecipazione dell'utente.
 *
 * La gestione della capienza, delle notifiche
 * e delle verifiche è responsabilità
 * del Meeting Engine.
 */
export interface MeetingParticipation {

  /**
   * Identificativo univoco della partecipazione.
   */
  id: string;

  /**
   * Meeting associato.
   */
  meetingId: string;

  /**
   * Collaboratore invitato o prenotato.
   */
  userId: string;

  /**
   * Stato della partecipazione.
   */
  status: MeetingParticipationStatus;

  /**
   * Data di creazione della partecipazione.
   *
   * Può rappresentare:
   * - una prenotazione autonoma;
   * - un invito inviato da un relatore;
   * - un inserimento effettuato da un amministratore.
   */
  createdAt: string;

  /**
   * Data di accettazione dell'invito.
   *
   * Presente solo quando
   * l'utente accetta la partecipazione.
   */
  acceptedAt?: string;

  /**
   * Data dell'eventuale annullamento.
   */
  cancelledAt?: string;

  /**
   * Utente che ha creato la partecipazione.
   *
   * Può coincidere con userId
   * oppure essere un relatore
   * o un amministratore.
   */
  addedBy?: string;

}
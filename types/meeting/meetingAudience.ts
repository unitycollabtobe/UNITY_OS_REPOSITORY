// ===========================================
// UNITY OS
// Meeting Audience Model
// Version: 1.0
// ===========================================

/**
 * Definisce il tipo di regola di visibilità del Meeting.
 *
 * Ogni regola rappresenta un solo criterio di accesso.
 *
 * Le regole sono sempre di tipo "consenti".
 * Unity non prevede regole di esclusione.
 */
export type MeetingAudienceType =
  | "public"
  | "network"
  | "user"
  | "role";

/**
 * MeetingAudience
 *
 * Definisce una singola regola di visibilità
 * associata ad un Meeting.
 *
 * Un Meeting può possedere più regole
 * contemporaneamente.
 *
 * Esempi:
 *
 * - pubblico
 * - rete di Mauro
 * - rete di Davide
 * - ruolo Relatore
 * - utente Mario
 *
 * Le regole vengono combinate dal
 * Meeting Audience Engine.
 */
export interface MeetingAudience {

  /**
   * Identificativo univoco della regola.
   */
  id: string;

  /**
   * Meeting a cui appartiene la regola.
   */
  meetingId: string;

  /**
   * Tipo della regola.
   */
  type: MeetingAudienceType;

  /**
   * Destinatario della regola.
   *
   * Esempi:
   *
   * network -> NET-001
   * user    -> USR-001
   * role    -> speaker
   *
   * Non utilizzato per "public".
   */
  target?: string;

}
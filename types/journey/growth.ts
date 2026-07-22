// ===========================================
// UNITY OS
// Growth Model
// Version: 1.0
// ===========================================

export interface GrowthResult {

  /**
   * Missione attualmente attiva.
   */
  currentMissionId: string;

  /**
   * Prossima azione da eseguire.
   * Undefined se la missione è completata.
   */
  nextActionId?: string;

  /**
   * Prossima missione da attivare.
   * Undefined se si rimane nella missione corrente.
   */
  nextMissionId?: string;

  /**
   * Prossima milestone da attivare.
   * Undefined se la milestone corrente continua.
   */
  nextMilestoneId?: string;

  /**
   * Il percorso del collaboratore è completato.
   */
  journeyCompleted: boolean;

}
// ===========================================
// UNITY OS
// Assessment Result Model
// Version: 1.0
// ===========================================

/**
 * AssessmentResult
 *
 * Rappresenta il risultato prodotto
 * dall'Assessment Engine.
 *
 * Definisce il punto di partenza
 * del collaboratore all'interno di Unity.
 *
 * Il Journey Engine utilizzerà questo
 * risultato per costruire il Journey
 * iniziale del collaboratore.
 */
export interface AssessmentResult {

  /**
   * Identificativo univoco del risultato.
   */
  id: string;

  /**
   * Collaboratore associato.
   */
  userId: string;

  /**
   * Milestone iniziale assegnata.
   *
   * Rappresenta il punto di partenza
   * del Journey.
   */
  startingMilestoneId: string;

  /**
   * Versione dell'algoritmo utilizzato
   * per il calcolo dell'Assessment.
   */
  assessmentVersion: string;

  /**
   * Data di generazione del risultato.
   */
  generatedAt: string;

}
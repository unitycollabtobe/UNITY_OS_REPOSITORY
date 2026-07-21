// ===========================================
// UNITY OS
// Assessment Model
// Version: 2.0
// ===========================================

/**
 * Assessment
 *
 * Rappresenta i dati iniziali utilizzati
 * dall'Assessment Engine per determinare
 * il punto di partenza del collaboratore.
 *
 * Unity importa esclusivamente due dati
 * dal sistema esterno:
 *
 * • numero collaboratori
 * • numero utenze
 *
 * Tutto il resto viene determinato
 * internamente da Unity.
 */
export interface Assessment {

  /**
   * Collaboratore associato.
   */
  userId: string;

  /**
   * Numero totale collaboratori.
   *
   * Importato dal sistema esterno.
   */
  collaborators: number;

  /**
   * Numero totale utenze.
   *
   * Importato dal sistema esterno.
   */
  utilities: number;

}
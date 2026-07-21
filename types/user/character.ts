// ===========================================
// UNITY OS
// Character Model
// Version: 2.0
// ===========================================

/**
 * Ruolo narrativo del personaggio.
 */
export type CharacterRole =
  | "navigator"
  | "mentor"
  | "speaker";

/**
 * Character
 *
 * Rappresenta un personaggio guida
 * dell'ecosistema Unity.
 *
 * I Character sono utilizzati per
 * accompagnare il collaboratore durante
 * il percorso, ma non rappresentano
 * utenti del sistema.
 */
export interface Character {

  /**
   * Identificativo univoco.
   */
  id: string;

  /**
   * Nome visualizzato.
   */
  name: string;

  /**
   * Avatar o immagine del personaggio.
   */
  avatar: string;

  /**
   * Ruolo narrativo.
   */
  role: CharacterRole;

  /**
   * Breve descrizione.
   */
  description: string;

}
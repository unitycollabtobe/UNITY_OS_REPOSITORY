// ===========================================
// UNITY OS
// Action Model
// Version: 2.0
// ===========================================

export type ActionType =
  | "read"
  | "watch"
  | "upload"
  | "meeting"
  | "invite"
  | "questionnaire"
  | "confirmation"
  | "task";

export type ActionEngine =
  | "assessment"
  | "mission"
  | "library"
  | "upload"
  | "meeting"
  | "invite"
  | "roadmap"
  | "dashboard"
  | "identity"
  | "growth";

export interface UnityActionRequirement {

  /**
   * Azione che deve essere completata
   * prima di poter eseguire questa.
   */
  actionId: string;

}

export interface UnityAction {

  /**
   * Identificatore univoco dell'azione.
   */
  id: string;

  /**
   * Missione di appartenenza.
   */
  missionId: string;

  /**
   * Engine responsabile dell'esecuzione.
   */
  engine: ActionEngine;

  /**
   * Titolo visualizzato.
   */
  title: string;

  /**
   * Descrizione dell'azione.
   */
  description: string;

  /**
   * Tipologia dell'azione.
   */
  type: ActionType;

  /**
   * Ordine all'interno della missione.
   */
  order: number;

  /**
   * Tempo stimato.
   */
  estimatedMinutes: number;

  /**
   * Se obbligatoria oppure no.
   */
  mandatory: boolean;

  /**
   * Azioni che devono essere completate
   * prima di questa.
   */
  requirements: UnityActionRequirement[];

  /**
   * Destinazione dell'azione.
   * (route, id, url o altro riferimento)
   */
  target?: string;

}
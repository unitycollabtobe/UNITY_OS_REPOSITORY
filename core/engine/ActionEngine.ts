// ===========================================
// UNITY OS
// Action Engine
// Version: 1.1
// ===========================================

import { actions } from "@/data/static/actions";
import { userActions } from "@/data/static/userActions";

import { UnityAction } from "@/types/journey/action";

import { BaseEngine } from "./BaseEngine";

export class ActionEngine extends BaseEngine {

  constructor() {
    super();
  }

  /**
   * Restituisce tutte le azioni.
   */
  getAll(): UnityAction[] {
    return actions;
  }

  /**
   * Cerca un'azione tramite ID.
   */
  getById(id: string): UnityAction | undefined {
    return actions.find(
      action => action.id === id
    );
  }

  /**
   * Restituisce tutte le azioni di una missione.
   */
  getByMission(missionId: string): UnityAction[] {
    return actions.filter(
      action => action.missionId === missionId
    );
  }

  /**
   * Restituisce la prossima azione del collaboratore.
   */
  getNextAction(userId: string): UnityAction | null {

    const userAction = userActions.find(
      item =>
        item.userId === userId &&
        !item.completed
    );

    if (!userAction) {
      return null;
    }

    return (
      actions.find(
        item => item.id === userAction.actionId
      ) ?? null
    );

  }

}
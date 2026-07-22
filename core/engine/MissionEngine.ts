// ===========================================
// UNITY OS
// Mission Engine
// Version: 2.0
// ===========================================

import { missions } from "@/data/static/missions";

import { Mission } from "@/types/journey/mission";
import { UnityAction } from "@/types/journey/action";

import { BaseEngine } from "./BaseEngine";
import { ActionEngine } from "./ActionEngine";

export class MissionEngine extends BaseEngine {

  private actionEngine: ActionEngine;

  constructor() {
    super();

    this.actionEngine = new ActionEngine();
  }

  /**
   * Restituisce tutte le missioni.
   */
  getAll(): Mission[] {
    return missions;
  }

  /**
   * Cerca una missione tramite ID.
   */
  getById(id: string): Mission | undefined {
    return missions.find(
      mission => mission.id === id
    );
  }

  /**
   * Restituisce tutte le missioni di una milestone.
   */
  getByMilestone(milestoneId: string): Mission[] {
    return missions.filter(
      mission => mission.milestoneId === milestoneId
    );
  }

  /**
   * Restituisce le azioni appartenenti
   * a una missione.
   */
  getActions(
    missionId: string
  ): UnityAction[] {

    return this.actionEngine.getByMission(
      missionId
    );

  }

}
// ===========================================
// UNITY OS
// Mission Engine
// Version: 1.3
// ===========================================

import { missions } from "@/data/static/missions";
import { userMissions } from "@/data/static/userMissions";

import { Mission } from "@/types/mission";
import { UserMission } from "@/types/userMission";
import { UnityAction } from "@/types/action";

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
   * Restituisce la prossima missione del collaboratore.
   */
  getNextMission(userId: string): Mission {

    const userMission = userMissions.find(
      item =>
        item.userId === userId &&
        !item.completed
    );

    if (!userMission) {
      return missions[0];
    }

    const mission = missions.find(
      item =>
        item.id === userMission.missionId
    );

    return mission ?? missions[0];

  }

  /**
   * Restituisce il progresso di una missione.
   */
  getProgress(
    userId: string,
    missionId: string
  ): UserMission | null {

    return (
      userMissions.find(
        item =>
          item.userId === userId &&
          item.missionId === missionId
      ) ?? null
    );

  }

  /**
   * Restituisce le azioni di una missione.
   */
  getActions(
    missionId: string
  ): UnityAction[] {

    return this.actionEngine.getByMission(
      missionId
    );

  }

}
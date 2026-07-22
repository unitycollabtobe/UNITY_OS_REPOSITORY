// ===========================================
// UNITY OS
// Journey Engine
// Version: 4.0
// ===========================================

import { milestones } from "@/data/static/milestones";

import { Milestone } from "@/types/journey/milestone";

import { BaseEngine } from "./BaseEngine";

export class JourneyEngine extends BaseEngine {

  constructor() {
    super();
  }

  /**
   * Restituisce tutte le milestone del Journey.
   */
  getJourney(): Milestone[] {
    return milestones;
  }

  /**
   * Restituisce il numero totale di milestone.
   */
  getTotalMilestones(): number {
    return milestones.length;
  }

  /**
   * Verifica se una milestone esiste.
   */
  hasMilestone(milestoneId: string): boolean {
    return milestones.some(
      milestone => milestone.id === milestoneId
    );
  }

  /**
   * Cerca una milestone tramite ID.
   */
  getMilestone(milestoneId: string): Milestone | undefined {
    return milestones.find(
      milestone => milestone.id === milestoneId
    );
  }

  /**
   * Restituisce la prima milestone del Journey.
   */
  getFirstMilestone(): Milestone | undefined {
    return milestones[0];
  }

  /**
   * Restituisce l'ultima milestone del Journey.
   */
  getLastMilestone(): Milestone | undefined {
    return milestones[milestones.length - 1];
  }

}
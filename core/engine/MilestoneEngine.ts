// ===========================================
// UNITY OS
// Milestone Engine
// Version: 2.0
// ===========================================

import { milestones } from "@/data/static/milestones";

import { Milestone } from "@/types/journey/milestone";

import { BaseEngine } from "./BaseEngine";

export class MilestoneEngine extends BaseEngine {

  constructor() {
    super();
  }

  /**
   * Restituisce tutte le milestone.
   */
  getAll(): Milestone[] {
    return milestones;
  }

  /**
   * Cerca una milestone tramite ID.
   */
  getById(id: string): Milestone | undefined {
    return milestones.find(
      milestone => milestone.id === id
    );
  }

  /**
   * Verifica se una milestone esiste.
   */
  has(id: string): boolean {
    return milestones.some(
      milestone => milestone.id === id
    );
  }

  /**
   * Restituisce la prima milestone.
   */
  getFirst(): Milestone | undefined {
    return milestones[0];
  }

  /**
   * Restituisce l'ultima milestone.
   */
  getLast(): Milestone | undefined {
    return milestones[milestones.length - 1];
  }

}
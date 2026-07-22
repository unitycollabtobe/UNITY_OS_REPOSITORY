// ===========================================
// UNITY OS
// Roadmap Engine
// Version: 2.0
// ===========================================

import { roadmaps } from "@/data/static/roadmaps";

import { Roadmap } from "@/types/journey/roadmap";

import { BaseEngine } from "./BaseEngine";

export class RoadmapEngine extends BaseEngine {

  constructor() {
    super();
  }

  /**
   * Restituisce tutte le roadmap.
   */
  getAll(): Roadmap[] {
    return roadmaps;
  }

  /**
   * Cerca una roadmap tramite ID.
   */
  getById(id: string): Roadmap | undefined {
    return roadmaps.find(
      roadmap => roadmap.id === id
    );
  }

  /**
   * Restituisce la roadmap associata a un percorso.
   */
  getByPath(path: Roadmap["path"]): Roadmap | undefined {
    return roadmaps.find(
      roadmap => roadmap.path === path
    );
  }

}
// ===========================================
// UNITY OS
// Growth Engine
// Version: 1.0
// ===========================================

import { BaseEngine } from "./BaseEngine";

import { GrowthResult } from "@/types/journey/growth";

export class GrowthEngine extends BaseEngine {

  constructor() {
    super();
  }

  /**
   * Valuta lo stato del collaboratore
   * e determina il prossimo passo del Journey.
   */
  evaluate(userId: string): GrowthResult {

    throw new Error("Not implemented.");

  }

}
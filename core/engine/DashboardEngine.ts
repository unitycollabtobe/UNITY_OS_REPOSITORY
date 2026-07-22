// ===========================================
// UNITY OS
// Dashboard Engine
// Version: 1.2
// ===========================================

import { BaseEngine } from "./BaseEngine";
import { CoreEngine } from "./CoreEngine";
import { MissionEngine } from "./MissionEngine";
import { ActionEngine } from "./ActionEngine";

export class DashboardEngine extends BaseEngine {

  private readonly coreEngine: CoreEngine;
  private readonly missionEngine: MissionEngine;
  private readonly actionEngine: ActionEngine;

  constructor() {
    super();

    this.coreEngine = new CoreEngine();
    this.missionEngine = new MissionEngine();
    this.actionEngine = new ActionEngine();
  }

  /**
   * Costruisce il Dashboard Context.
   */
  async load() {

    const result = await this.coreEngine.boot();

    const currentMission = null;

    const nextAction = null;

    return {

      context: result.context,

      decision: result.decision,

      recommendation: result.recommendation,

      currentMission,

      nextAction,

    };

  }

  /**
   * Punto di ingresso pubblico.
   */
  async build() {
    return this.load();
  }

}
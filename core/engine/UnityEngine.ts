// ===========================================
// UNITY OS
// Unity Engine
// Version: 1.2
// ===========================================

import { BaseEngine } from "./BaseEngine";
import { CoreEngine } from "./CoreEngine";
import { MissionEngine } from "./MissionEngine";
import { ActionEngine } from "./ActionEngine";
import { CompletionEngine } from "./CompletionEngine";
import { GrowthEngine } from "./GrowthEngine";
import { RecommendationEngine } from "./RecommendationEngine";
import { DecisionEngine } from "./DecisionEngine";
import { DashboardEngine } from "./DashboardEngine";

export class UnityEngine extends BaseEngine {

  readonly core: CoreEngine;

  readonly mission: MissionEngine;

  readonly action: ActionEngine;

  readonly completion: CompletionEngine;

  readonly growth: GrowthEngine;

  readonly recommendation: RecommendationEngine;

  readonly decision: DecisionEngine;

  readonly dashboard: DashboardEngine;

  constructor() {

    super();

    this.core = new CoreEngine();

    this.mission = new MissionEngine();

    this.action = new ActionEngine();

    this.completion = new CompletionEngine();

    this.growth = new GrowthEngine();

    this.recommendation = new RecommendationEngine();

    this.decision = new DecisionEngine();

    this.dashboard = new DashboardEngine();

  }

}
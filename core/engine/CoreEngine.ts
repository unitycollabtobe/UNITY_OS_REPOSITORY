/**
 * ==========================================
 * UNITY OS
 * Core Engine
 * Version: 1.1
 * ==========================================
 */

import { ContextBuilder } from "../context/ContextBuilder";

import { BaseEngine } from "./BaseEngine";
import { DecisionEngine } from "./DecisionEngine";
import { RecommendationEngine } from "./RecommendationEngine";

export class CoreEngine extends BaseEngine {

  private readonly contextBuilder: ContextBuilder;
  private readonly decisionEngine: DecisionEngine;
  private readonly recommendationEngine: RecommendationEngine;

  constructor() {
    super();

    this.contextBuilder = new ContextBuilder();
    this.decisionEngine = new DecisionEngine();
    this.recommendationEngine = new RecommendationEngine();
  }

  /**
   * Avvia il motore principale di Unity.
   */
  async boot() {

    const context = await this.contextBuilder.build();

    const decision =
      this.decisionEngine.evaluate(context);

    const recommendation =
      this.recommendationEngine.build(
        decision
      );

    return {

      context,

      decision,

      recommendation,

    };

  }

}
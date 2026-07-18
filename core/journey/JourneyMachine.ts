// ===========================================
// UNITY OS
// Journey Machine
// Version: 1.0
// ===========================================

import { JourneyState } from "./JourneyState";
import { JourneyTransitions } from "./JourneyTransitions";

export class JourneyMachine {

  /**
   * Verifica se una transizione è valida.
   */
  canTransition(
    current: JourneyState,
    next: JourneyState
  ): boolean {

    const allowed =
      JourneyTransitions[current];

    return allowed.includes(next);

  }

  /**
   * Restituisce tutti gli stati raggiungibili.
   */
  getAvailableTransitions(
    current: JourneyState
  ): JourneyState[] {

    return JourneyTransitions[current];

  }

}
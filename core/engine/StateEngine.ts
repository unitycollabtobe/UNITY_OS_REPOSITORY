import { CoreEngine } from "./CoreEngine";

import {
  getState,
  setState,
  hasState,
  clearState,
} from "./StateHelpers";

import { UnityState } from "./StateTypes";

export class StateEngine {
  async initialize(): Promise<UnityState> {
    if (hasState()) {
      return getState()!;
    }

    const core = new CoreEngine();

    const result = await core.boot();

    const state: UnityState = {
      context: result.context,

      decision: result.decision,

      recommendation: result.recommendation,

      initialized: true,

      updatedAt: new Date(),
    };

    setState(state);

    return state;
  }

  get(): UnityState | null {
    return getState();
  }

  reset() {
    clearState();
  }
}
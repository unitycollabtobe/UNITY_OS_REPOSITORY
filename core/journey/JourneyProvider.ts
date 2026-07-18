import { StateEngine } from "../engine/StateEngine";

const stateEngine = new StateEngine();

const state = await stateEngine.initialize();

export const dashboardContext = state;

export const journeyContext = {
  ...state.context,

  decision: state.decision,

  recommendation: state.recommendation,
};
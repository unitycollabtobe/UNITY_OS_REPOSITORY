import { CoreEngine } from "../engine/CoreEngine";
import { DecisionEngine } from "../engine/DecisionEngine";

async function runDecisionTest() {
  const core = new CoreEngine();

  const { context } = await core.boot();

  const engine = new DecisionEngine();

  const decision = engine.evaluate(context);

  console.assert(decision.nextAction, "Decision non generata");

  console.log("✅ DecisionEngine OK");
}

runDecisionTest();
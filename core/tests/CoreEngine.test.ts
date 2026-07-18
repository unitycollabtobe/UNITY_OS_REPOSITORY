import { CoreEngine } from "../engine/CoreEngine";

async function runCoreEngineTest() {
  const engine = new CoreEngine();

  const result = await engine.boot();

  console.assert(result.context, "Context non creato");

  console.assert(result.decision, "Decision mancante");

  console.assert(result.recommendation, "Recommendation mancante");

  console.log("✅ CoreEngine OK");
}

runCoreEngineTest();
import { StateEngine } from "../engine/StateEngine";

async function runStateTest() {
  const engine = new StateEngine();

  const state = await engine.initialize();

  console.assert(state.initialized, "State non inizializzato");

  console.log("✅ StateEngine OK");
}

runStateTest();
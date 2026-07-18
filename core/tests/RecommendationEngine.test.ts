import { CoreEngine } from "../engine/CoreEngine";
import { RecommendationEngine } from "../engine/RecommendationEngine";

async function runRecommendationTest() {
  const core = new CoreEngine();

  const { decision } = await core.boot();

  const engine = new RecommendationEngine();

  const recommendation = engine.build(decision);

  console.assert(recommendation.title, "Recommendation non creata");

  console.log("✅ RecommendationEngine OK");
}

runRecommendationTest();
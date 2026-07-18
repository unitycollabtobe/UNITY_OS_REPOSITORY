import Card from "../ui/Card";
import Button from "../ui/Button";

import { journeyContext } from "./JourneyProvider";

export default function JourneyCard() {
  const { journey, decision, recommendation } = journeyContext;

  const progress = journey.progress;

  return (
    <Card className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-widest text-cyan-400">
          Il tuo percorso
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {decision.title}
        </h2>

        <p className="mt-3 text-gray-400">
          {decision.description}
        </p>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-gray-400">
            Progressione
          </span>

          <span className="font-semibold text-cyan-400">
            {progress}%
          </span>
        </div>

        <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
        <p className="text-xs uppercase tracking-widest text-cyan-400">
          Prossimo passo
        </p>

        <p className="mt-2 text-white">
          {journey.nextStep}
        </p>
      </div>

      <Button className="w-full">
        {recommendation.cta}
      </Button>
    </Card>
  );
}
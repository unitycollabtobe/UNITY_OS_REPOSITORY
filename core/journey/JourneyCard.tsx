import Card from "../ui/Card";
import Button from "../ui/Button";

import { journeyContext } from "./JourneyProvider";

export default function JourneyCard() {
  const { journey, decision, recommendation } = journeyContext;

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

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 space-y-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-400">
            Percorso
          </p>

          <p className="mt-1 text-white capitalize">
            {journey.path}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-400">
            Milestone corrente
          </p>

          <p className="mt-1 text-white">
            {journey.currentMilestoneId ?? "Da assegnare"}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-400">
            Missione corrente
          </p>

          <p className="mt-1 text-white">
            {journey.currentMissionId ?? "Nessuna missione disponibile"}
          </p>
        </div>
      </div>

      <Button className="w-full">
        {recommendation.cta}
      </Button>
    </Card>
  );
}
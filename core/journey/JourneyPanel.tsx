import Card from "../ui/Card";
import Button from "../ui/Button";

import { journeyContext } from "../journey/JourneyProvider";

export default function JourneyPanel() {
  const { profile, journey, decision, recommendation } = journeyContext;

  return (
    <Card className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          IL TUO PERCORSO
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          {decision.title}
        </h2>

        <p className="mt-2 text-gray-400">
          {decision.description}
        </p>

        <div className="mt-6 flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400">
              Collaboratore
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {profile.firstName} {profile.lastName}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-cyan-400">
              Ruolo
            </p>

            <p className="mt-1 font-semibold text-white">
              {profile.role}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 flex justify-between text-sm">
          <span className="text-gray-400">
            Progressione
          </span>

          <span className="font-semibold text-cyan-400">
            {journey.progress}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-700"
            style={{
              width: `${journey.progress}%`,
            }}
          />
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Percorso
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {journey.path}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Prossimo Passo
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {journey.nextStep}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Tempo stimato
          </p>

          <p className="mt-1 text-lg font-semibold text-cyan-400">
            {recommendation.estimatedMinutes} minuti
          </p>
        </div>
      </div>

      <Button className="w-full">
        {recommendation.cta}
      </Button>
    </Card>
  );
}
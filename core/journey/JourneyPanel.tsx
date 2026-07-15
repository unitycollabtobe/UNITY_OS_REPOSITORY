import Card from "../ui/Card";
import Button from "../ui/Button";

import { mockUser } from "@/data/mockUser";

export default function JourneyPanel() {
  return (
    <Card className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          IL TUO PERCORSO
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          {mockUser.path.name}
        </h2>

        <p className="mt-2 text-gray-400">
          Versione {mockUser.path.version} • Stato {mockUser.path.status}
        </p>

        <div className="mt-6 flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400">
              Collaboratore
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {mockUser.firstName} {mockUser.lastName}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-cyan-400">
              Ruolo
            </p>

            <p className="mt-1 font-semibold text-white">
              {mockUser.role}
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
            {mockUser.progress}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-700"
            style={{
              width: `${mockUser.progress}%`,
            }}
          />
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Fase attuale
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {mockUser.path.currentPhase}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Prossima Missione
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {mockUser.nextMission.title}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Prossimo Traguardo
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {mockUser.nextMilestone.title}
          </p>
        </div>
      </div>

      <Button className="w-full">
        Continua il percorso
      </Button>
    </Card>
  );
}
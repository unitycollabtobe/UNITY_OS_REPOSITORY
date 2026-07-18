import Card from "../ui/Card";

import { mockMilestone } from "@/data/mock/mockMilestone";

export default function MilestoneCard() {
  const percentage =
    (mockMilestone.current / mockMilestone.target) * 100;

  return (
    <Card className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          TRAGUARDO ATTUALE
        </p>

        <h2 className="mt-2 flex items-center gap-3 text-3xl font-bold text-white">
          <span>{mockMilestone.icon}</span>

          <span>{mockMilestone.title}</span>
        </h2>

        <p className="mt-3 text-gray-400">
          {mockMilestone.description}
        </p>
      </div>

      <div>
        <div className="mb-3 flex justify-between text-sm">
          <span className="text-gray-400">
            Avanzamento
          </span>

          <span className="font-semibold text-cyan-400">
            {mockMilestone.current} / {mockMilestone.target}
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-400">
            Categoria
          </span>

          <span className="font-semibold text-white">
            {mockMilestone.category}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Ricompensa
          </span>

          <span className="font-semibold text-cyan-400">
            {mockMilestone.reward}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Prossimo
          </span>

          <span className="font-semibold text-white">
            {mockMilestone.nextMilestone}
          </span>
        </div>
      </div>
    </Card>
  );
}
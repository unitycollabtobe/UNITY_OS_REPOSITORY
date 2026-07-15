import Card from "../ui/Card";
import Button from "../ui/Button";

import { mockMission } from "@/data/mockMission";

export default function MissionCard() {
  return (
    <Card className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          MISSIONE DI OGGI
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {mockMission.title}
        </h2>

        <p className="mt-3 text-gray-400">
          {mockMission.description}
        </p>
      </div>

      <div>
        <div className="mb-3 flex justify-between text-sm">
          <span className="text-gray-400">
            Avanzamento
          </span>

          <span className="font-semibold text-cyan-400">
            {mockMission.completedSteps}/{mockMission.totalSteps}
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-700"
            style={{
              width: `${(mockMission.completedSteps / mockMission.totalSteps) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {mockMission.steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <div className="text-xl">
              {step.completed ? "✅" : "⬜"}
            </div>

            <p
              className={
                step.completed
                  ? "text-white line-through opacity-60"
                  : "text-white"
              }
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-400">
            Priorità
          </span>

          <span className="font-semibold text-white">
            {mockMission.priority}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Tempo stimato
          </span>

          <span className="font-semibold text-white">
            {mockMission.estimatedTime}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Guida consigliata
          </span>

          <span className="font-semibold text-cyan-400">
            {mockMission.guide}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Ricompensa
          </span>

          <span className="font-semibold text-cyan-400">
            {mockMission.reward}
          </span>
        </div>
      </div>

      <Button className="w-full">
        {mockMission.action}
      </Button>
    </Card>
  );
}
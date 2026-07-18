import Card from "../ui/Card";

import { mockVision } from "@/data/mock/mockVision";

export default function VisionCard() {
  return (
    <Card className="space-y-8">

      <div>

        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          VISIONE
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {mockVision.title}
        </h2>

        <p className="mt-3 text-gray-400">
          {mockVision.description}
        </p>

      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

        <p className="italic text-lg text-white leading-relaxed">
          "{mockVision.quote}"
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Orizzonte
          </p>

          <p className="mt-1 font-semibold text-white">
            {mockVision.target}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Prossimo Obiettivo
          </p>

          <p className="mt-1 font-semibold text-cyan-400">
            {mockVision.nextGoal}
          </p>

        </div>

      </div>

    </Card>
  );
}
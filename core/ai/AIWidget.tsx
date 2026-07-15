import Card from "../ui/Card";
import Button from "../ui/Button";

import { mockAI } from "@/data/mockAI";

export default function AIWidget() {
  return (
    <Card className="space-y-6">

      <div>

        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          LA TUA GUIDA
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {mockAI.name}
        </h2>

      </div>

      <p className="text-gray-300 leading-7">
        {mockAI.message}
      </p>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">

        <p className="text-sm text-cyan-300">
          💡 {mockAI.suggestion}
        </p>

      </div>

      <Button className="w-full">
        {mockAI.button}
      </Button>

    </Card>
  );
}
import Card from "../ui/Card";
import Button from "../ui/Button";

interface JourneyCardProps {
  title: string;
  description: string;
  progress: number;
}

export default function JourneyCard({
  title,
  description,
  progress,
}: JourneyCardProps) {
  return (
    <Card className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-widest text-cyan-400">
          Il tuo percorso
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-3 text-gray-400">
          {description}
        </p>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-gray-400">Progressione</span>

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

      <Button className="w-full">
        Continua il percorso
      </Button>
    </Card>
  );
}
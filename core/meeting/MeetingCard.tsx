import Card from "../ui/Card";
import Button from "../ui/Button";

import { Meeting } from "@/types/meeting";

interface MeetingCardProps {
  meeting: Meeting;
}

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  return (
    <Card className="space-y-8 p-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          {meeting.type === "bonus"
            ? "MEETING BONUS"
            : "MINI MEETING"}
        </p>

        <h2 className="text-4xl font-bold text-white">
          {meeting.title}
        </h2>

        <p className="text-lg leading-8 text-gray-300">
          {meeting.description}
        </p>
      </div>

      <div className="grid gap-6 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 md:grid-cols-2">
        <div className="space-y-5">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Modalità
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              {meeting.mode === "online"
                ? "Online"
                : "In Presenza"}
            </h3>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Data
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              {meeting.date}
            </h3>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Orario
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              {meeting.time}
            </h3>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Relatore
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              {meeting.speaker}
            </h3>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Posti disponibili
            </p>

            <h3 className="mt-1 text-2xl font-bold text-cyan-400">
              {meeting.remainingSeats}
            </h3>
          </div>
        </div>
      </div>

      <Button
        className="w-full"
        disabled={meeting.locked}
      >
        {meeting.locked
          ? "Completa prima un Mini Meeting"
          : "Prenota il Meeting"}
      </Button>
    </Card>
  );
}
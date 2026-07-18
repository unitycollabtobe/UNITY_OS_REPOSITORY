import MeetingCard from "./MeetingCard";

import { MeetingEngine } from "./MeetingEngine";
const meetingEngine = new MeetingEngine();

const meetings = meetingEngine.getPublicMeetings();
export default function MeetingList() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          IL TUO PRIMO PASSO
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Partecipa ad un Mini Meeting
        </h2>

        <p className="mt-8 text-xl leading-9 text-gray-300">
          Non serve decidere oggi.
          <br />
          Ti basta partecipare gratuitamente ad uno dei Mini Meeting
          per capire se Unity è il percorso giusto per te.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </section>
  );
}
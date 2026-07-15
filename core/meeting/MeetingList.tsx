import MeetingCard from "./MeetingCard";

import { mockMeetings } from "@/data/mockMeeting";

export default function MeetingList() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <div className="mx-auto mb-16 max-w-4xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          IL PRIMO PASSO
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Conosci Unity.
        </h2>

        <p className="mt-8 text-xl leading-9 text-gray-300">
          Prima di entrare in Unity vogliamo conoscerti.
          <br />
          Scegli uno dei Mini Meeting disponibili e scopri
          se questo percorso è quello giusto per te.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {mockMeetings.map((meeting) => (

          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />

        ))}

      </div>

    </section>
  );
}
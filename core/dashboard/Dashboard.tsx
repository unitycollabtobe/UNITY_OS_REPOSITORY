import SectionTitle from "../ui/SectionTitle";

import JourneyPanel from "../journey/JourneyPanel";
import MissionCard from "../mission/MissionCard";
import MilestoneCard from "../milestone/MilestoneCard";
import MeetingCard from "../meeting/MeetingCard";
import VisionCard from "../vision/VisionCard";
import UploadWindow from "../features/upload/UploadWindow";

import { dashboardContext } from "../journey/JourneyProvider";
import { MeetingEngine } from "../meeting/MeetingEngine";

const meetingEngine = new MeetingEngine();

export default function Dashboard() {
  const { context } = dashboardContext;

  const nextMeeting = meetingEngine.getNextMeeting();

  return (
    <>
      <SectionTitle
        title="Dashboard"
        subtitle={`Bentornato ${context.profile.firstName}. Ecco il tuo prossimo passo.`}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <JourneyPanel />

        <MissionCard />

        <MilestoneCard />

        {nextMeeting && (
          <MeetingCard meeting={nextMeeting} />
        )}

        <VisionCard />

        <div className="lg:col-span-2">
          <UploadWindow />
        </div>
      </div>
    </>
  );
}
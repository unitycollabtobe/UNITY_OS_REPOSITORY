import OSLayout from "@/core/os/OSLayout";
import SectionTitle from "@/core/ui/SectionTitle";
import VisionCard from "@/core/vision/VisionCard";
import JourneyPanel from "@/core/journey/JourneyPanel";
import MissionCard from "@/core/mission/MissionCard";
import MeetingCard from "@/core/meeting/MeetingCard";
import MilestoneCard from "@/core/milestone/MilestoneCard";

import UploadWindow from "@/core/features/upload/UploadWindow";
import { mockMeetings } from "@/data/mockMeeting";
export default function UnityOSPage() {
  return (
    <OSLayout>
      <SectionTitle
        title="Dashboard"
        subtitle="Bentornato Simone. Ecco il tuo prossimo passo."
      />

      <div className="grid gap-6 lg:grid-cols-2">

        <JourneyPanel />

        <MissionCard />

        <MilestoneCard />

        <MeetingCard meeting={mockMeetings[0]} />

        <VisionCard />

        <div className="lg:col-span-2">
          <UploadWindow />
        </div>

      </div>
    </OSLayout>
  );
}
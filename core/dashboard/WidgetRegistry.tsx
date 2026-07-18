import JourneyPanel from "../journey/JourneyPanel";
import MissionCard from "../mission/MissionCard";
import MilestoneCard from "../milestone/MilestoneCard";
import MeetingCard from "../meeting/MeetingCard";
import VisionCard from "../vision/VisionCard";

import UploadWindow from "../features/upload/UploadWindow";

export const WidgetRegistry = {
  journey: () => <JourneyPanel />,

  mission: () => <MissionCard />,

  milestone: () => <MilestoneCard />,

  meeting: () => <MeetingCard />,

  vision: () => <VisionCard />,

  upload: () => (
    <div className="lg:col-span-2">
      <UploadWindow />
    </div>
  ),
};
import JourneyPanel from "../journey/JourneyPanel";
import MissionCard from "../mission/MissionCard";
import MilestoneCard from "../milestone/MilestoneCard";
import VisionCard from "../vision/VisionCard";

import UploadWindow from "../features/upload/UploadWindow";

export const WidgetRegistry = {
  journey: () => <JourneyPanel />,

  mission: () => <MissionCard />,

  milestone: () => <MilestoneCard />,

  vision: () => <VisionCard />,

  upload: () => (
    <div className="lg:col-span-2">
      <UploadWindow />
    </div>
  ),
};
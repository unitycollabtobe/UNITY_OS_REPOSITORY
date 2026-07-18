import { JourneyPath } from "@/types/enums";

export interface JourneyContext {
  path: JourneyPath;

  currentMissionId: string;

  currentMilestoneId: string | null;

  nextStep: string;

  progress: number;
}
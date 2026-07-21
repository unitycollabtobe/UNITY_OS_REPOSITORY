/**
 * ==========================================
 * UNITY OS
 * Journey Mapper
 * Version: 2.0
 * ==========================================
 */

import { JourneyContext } from "./JourneyContext";
import { mockMission } from "@/data/mock/mockMission";
import { JourneyPath } from "@/types/enums";

export class JourneyMapper {
  static toContext(): JourneyContext {
    return {
      path: JourneyPath.IDENTITY,

      currentMissionId: mockMission.id,

      currentMilestoneId: null,
    };
  }
}
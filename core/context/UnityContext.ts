/**
 * ==========================================
 * UNITY OS
 * ARCH-002
 * Unity Context
 * Version: 1.0
 * ==========================================
 */

import { ProfileContext } from "./profile/ProfileContext";
import { JourneyContext } from "./journey/JourneyContext";
import { StateContext } from "./state/StateContext";
import { RuntimeContext } from "./runtime/RuntimeContext";
import { MeetingContext } from "./meeting/MeetingContext";
import { UploadContext } from "./upload/UploadContext";
import { TeamContext } from "./team/TeamContext";
import { RewardsContext } from "./rewards/RewardsContext";
import { SystemContext } from "./system/SystemContext";

export interface UnityContext {

  profile: ProfileContext;

  journey: JourneyContext;

  state: StateContext;

  runtime: RuntimeContext;

  meeting: MeetingContext;

  upload: UploadContext;

  team: TeamContext;

  rewards: RewardsContext;

  system: SystemContext;

}
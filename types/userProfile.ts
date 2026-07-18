// ===========================================
// UNITY OS
// User Profile Model
// Version: 1.0
// ===========================================

import { User } from "./user";
import { UserJourney } from "./userJourney";
import { UserMilestone } from "./userMilestone";
import { UserMission } from "./userMission";

export interface UserProfile {
  user: User;

  journey: UserJourney;

  milestones: UserMilestone[];

  missions: UserMission[];
}
// ===========================================
// UNITY OS
// Journey Transitions
// Version: 1.0
// ===========================================

import { JourneyState } from "./JourneyState";

export const JourneyTransitions: Record<
  JourneyState,
  JourneyState[]
> = {

  [JourneyState.LANDING]: [
    JourneyState.MEETING_BOOKED,
  ],

  [JourneyState.MEETING_BOOKED]: [
    JourneyState.MEETING_COMPLETED,
  ],

  [JourneyState.MEETING_COMPLETED]: [
    JourneyState.REGISTERED,
  ],

  [JourneyState.REGISTERED]: [
    JourneyState.ASSESSMENT,
  ],

  [JourneyState.ASSESSMENT]: [
    JourneyState.DASHBOARD,
  ],

  [JourneyState.DASHBOARD]: [
    JourneyState.FIRST_MISSION,
  ],

  [JourneyState.FIRST_MISSION]: [
    JourneyState.ACTIVE,
  ],

  [JourneyState.ACTIVE]: [
    JourneyState.CONSISTENT,
  ],

  [JourneyState.CONSISTENT]: [
    JourneyState.LEADER,
  ],

  [JourneyState.LEADER]: [
    JourneyState.MENTOR,
  ],

  [JourneyState.MENTOR]: [],

};
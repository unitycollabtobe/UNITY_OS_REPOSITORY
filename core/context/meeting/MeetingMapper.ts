/**
 * ==========================================
 * UNITY OS
 * Meeting Mapper
 * Version: 2.0
 * ==========================================
 */

import { MeetingContext } from "./MeetingContext";
import { mockMeetings } from "@/data/mock/mockMeeting";

export class MeetingMapper {
  static toContext(): MeetingContext {
    const nextMeeting = mockMeetings[0];

    return {
      nextMeetingId: nextMeeting?.id ?? null,

      nextMeetingDate: nextMeeting
        ? new Date(`${nextMeeting.date} ${nextMeeting.time}`)
        : null,
    };
  }
}
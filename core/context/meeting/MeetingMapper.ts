/**
 * ==========================================
 * UNITY OS
 * Meeting Mapper
 * Version: 1.0
 * ==========================================
 */

import { MeetingContext } from "./MeetingContext";
import { mockMeetings } from "@/data/mock/mockMeeting";
import { MeetingStatus } from "@/types/enums";

export class MeetingMapper {
  static toContext(): MeetingContext {
    const nextMeeting = mockMeetings[0];

    return {
      nextMeetingId: nextMeeting?.id ?? null,

      nextMeetingDate: nextMeeting
        ? new Date(`${nextMeeting.date} ${nextMeeting.time}`)
        : null,

      speakerId: nextMeeting?.speaker ?? null,

      pendingMeetings: mockMeetings.filter(
        (meeting) => meeting.status === "scheduled"
      ).length,

      status:
        mockMeetings.filter(
          (meeting) => meeting.status === "scheduled"
        ).length > 0
          ? MeetingStatus.BOOKED
          : MeetingStatus.NONE,
    };
  }
}
import { MeetingStatus } from "@/types/enums";

export interface MeetingContext {
  nextMeetingId: string | null;

  nextMeetingDate: Date | null;

  speakerId: string | null;

  pendingMeetings: number;

  status: MeetingStatus;
}
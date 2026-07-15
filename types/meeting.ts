export type MeetingType = "online" | "presence";

export type MeetingStatus =
  | "scheduled"
  | "live"
  | "completed"
  | "full";

export interface Meeting {
  id: string;

  title: string;

  description: string;

  type: MeetingType;

  status: MeetingStatus;

  speaker: string;

  date: string;

  time: string;

  duration: number;

  maxParticipants: number;

  bookedParticipants: number;

  address?: string;

  mapsUrl?: string;

  wazeUrl?: string;

  meetingUrl?: string;

  remainingSeats: number;

}
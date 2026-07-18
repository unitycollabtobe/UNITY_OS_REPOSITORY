// ===========================================
// UNITY OS
// Meeting Model
// Version: 1.1
// ===========================================

export type MeetingType =
  | "mini"
  | "bonus"
  | "training"
  | "event"
  | "personal";

export type MeetingMode =
  | "online"
  | "presence";

export type MeetingStatus =
  | "scheduled"
  | "live"
  | "completed"
  | "cancelled"
  | "full";

export interface Meeting {

  id: string;

  title: string;

  description: string;

  type: MeetingType;

  mode: MeetingMode;

  status: MeetingStatus;

  speaker: string;

  date: string;

  time: string;

  duration: number;

  maxParticipants: number;

  bookedParticipants: number;

  remainingSeats: number;

  locked: boolean;

  address?: string;

  mapsUrl?: string;

  wazeUrl?: string;

  meetingUrl?: string;

  createdAt: string;

  updatedAt: string;

}
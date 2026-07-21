// ===========================================
// UNITY OS
// Meeting Model
// Version: 2.2
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
  | "cancelled";

export interface MeetingLocation {

  address: string;

  place?: string;

  room?: string;

  notes?: string;

}

export interface Meeting {

  id: string;

  title: string;

  description: string;

  type: MeetingType;

  mode: MeetingMode;

  status: MeetingStatus;

  createdBy: string;

  speakerIds: string[];

  date: string;

  time: string;

  duration: number;

  maxParticipants: number;

  location?: MeetingLocation;

  meetingUrl?: string;

}
// ===========================================
// UNITY OS
// Mock Meetings
// Version: 2.0
// ===========================================

import { Meeting } from "@/types/meeting/meeting";

export const mockMeetings: Meeting[] = [
  {
    id: "MEET-001",

    title: "Mini Meeting Conoscitivo",

    description:
      "Prima di entrare in Unity vogliamo conoscerti. Prenota il tuo primo Mini Meeting.",

    type: "mini",

    mode: "online",

    status: "scheduled",

    createdBy: "USR-DAVIDE",

    speakerIds: ["USR-DAVIDE"],

    date: "2026-07-18",

    time: "21:00",

    duration: 60,

    maxParticipants: 20,

    meetingUrl: "https://meeting.unity.local",
  },

  {
    id: "MEET-002",

    title: "Meeting Bonus",

    description:
      "Partecipa al Meeting Bonus dopo aver completato il Mini Meeting.",

    type: "bonus",

    mode: "presence",

    status: "scheduled",

    createdBy: "USR-ENRICO",

    speakerIds: ["USR-ENRICO"],

    date: "2026-07-19",

    time: "20:30",

    duration: 60,

    maxParticipants: 15,

    location: {
      address: "Via Luciano Lama 80, Cesena",
    },
  },
];
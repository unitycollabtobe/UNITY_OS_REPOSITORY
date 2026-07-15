import { Meeting } from "@/types/meeting";

export const mockMeetings: Meeting[] = [
  {
    id: "MEET-001",

    title: "Mini Meeting Conoscitivo",

    description:
      "Prima di entrare in Unity vogliamo conoscerti. Prenota il tuo primo Mini Meeting.",

    type: "online",

    status: "scheduled",

    speaker: "Davide",

    date: "Sabato 18 Luglio 2026",

    time: "21:00",

    duration: 60,

    maxParticipants: 20,

    bookedParticipants: 8,

    remainingSeats: 12,

    meetingUrl: "https://meeting.unity.local",
  },

  {
    id: "MEET-002",

    title: "Mini Meeting Conoscitivo",

    description:
      "Incontra il relatore dal vivo e scopri come funziona Unity.",

    type: "presence",

    status: "scheduled",

    speaker: "Enrico",

    date: "Domenica 19 Luglio 2026",

    time: "20:30",

    duration: 60,

    maxParticipants: 15,

    bookedParticipants: 10,

    remainingSeats: 5,

    address: "Via Luciano Lama 80, Cesena",

    mapsUrl: "https://maps.google.com",

    wazeUrl: "https://waze.com",
  },
];
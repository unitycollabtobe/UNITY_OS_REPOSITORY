import { mockMeetings } from "@/data/mock/mockMeeting";

import { Meeting } from "@/types/meeting/meeting";

export class MeetingEngine {
  getAll(): Meeting[] {
    return mockMeetings;
  }

  getPublicMeetings(): Meeting[] {
    return mockMeetings.filter(
      (meeting) =>
        meeting.type === "mini" ||
        meeting.type === "bonus"
    );
  }

  getCollaboratorMeetings(): Meeting[] {
    return mockMeetings;
  }

  getNextMeeting(): Meeting | undefined {
    return this.getCollaboratorMeetings()[0];
  }
}
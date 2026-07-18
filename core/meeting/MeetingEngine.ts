import { mockMeetings } from "@/data/mock/mockMeeting";

import { Meeting } from "@/types/meeting";

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

  getAvailableMeetings(): Meeting[] {
    return this.getCollaboratorMeetings().filter(
      (meeting) => !meeting.locked
    );
  }

  getLockedMeetings(): Meeting[] {
    return this.getCollaboratorMeetings().filter(
      (meeting) => meeting.locked
    );
  }

  getNextMeeting(): Meeting | undefined {
    return this.getAvailableMeetings()[0];
  }

  hasLockedMeetings(): boolean {
    return this.getLockedMeetings().length > 0;
  }
}
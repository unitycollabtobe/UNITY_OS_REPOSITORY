/**
 * ==========================================
 * UNITY OS
 * Context Builder
 * Version: 1.0
 * ==========================================
 */

import { UnityContext } from "./UnityContext";

import { ProfileMapper } from "./profile/ProfileMapper";
import { JourneyMapper } from "./journey/JourneyMapper";
import { MeetingMapper } from "./meeting/MeetingMapper";
import { UploadMapper } from "./upload/UploadMapper";

export class ContextBuilder {

  async build(): Promise<UnityContext> {

    return {

      profile: ProfileMapper.toContext(),

      journey: JourneyMapper.toContext(),

      state: {
        current: "FIRST_LOGIN",
        previous: null,
        next: null,
        updatedAt: new Date(),
      },

      runtime: {
        lastLogin: new Date(),
        inactiveDays: 0,
        pendingNotifications: 0,
        pendingMeetings: 0,
        pendingUploads: 0,
        pendingRaffronti: 0,
      },

      meeting: MeetingMapper.toContext(),

      upload: UploadMapper.toContext(),

      team: {
        collaborators: 0,
        activeCollaborators: 0,
        invitedCollaborators: 0,
        pendingInvitations: 0,
      },

      rewards: {
        xp: 0,
        level: 1,
        badges: 0,
        completedMissions: 0,
      },

      system: {
        version: "1.0",
        language: "it",
        theme: "dark",
        environment: "development",
      },

    };

  }

}
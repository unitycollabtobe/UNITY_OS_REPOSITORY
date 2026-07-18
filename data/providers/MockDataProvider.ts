/**
 * ==========================================
 * UNITY OS
 * Mock Data Provider
 * Version: 1.0
 * ==========================================
 */

import { UnityDataProvider } from "./UnityDataProvider";

import { ProfileContext } from "@/core/context/profile/ProfileContext";
import { JourneyContext } from "@/core/context/journey/JourneyContext";
import { MeetingContext } from "@/core/context/meeting/MeetingContext";
import { UploadContext } from "@/core/context/upload/UploadContext";
import { TeamContext } from "@/core/context/team/TeamContext";

import { ProfileMapper } from "@/core/context/profile/ProfileMapper";
import { JourneyMapper } from "@/core/context/journey/JourneyMapper";
import { MeetingMapper } from "@/core/context/meeting/MeetingMapper";
import { UploadMapper } from "@/core/context/upload/UploadMapper";

export class MockDataProvider implements UnityDataProvider {

  async getProfile(): Promise<ProfileContext> {
    return ProfileMapper.toContext();
  }

  async getJourney(): Promise<JourneyContext> {
    return JourneyMapper.toContext();
  }

  async getMeeting(): Promise<MeetingContext> {
    return MeetingMapper.toContext();
  }

  async getUpload(): Promise<UploadContext> {
    return UploadMapper.toContext();
  }

  async getTeam(): Promise<TeamContext> {
    return {
      collaborators: 0,
      activeCollaborators: 0,
      invitedCollaborators: 0,
      pendingInvitations: 0,
    };
  }

}
/**
 * ==========================================
 * UNITY OS
 * Data Provider
 * Version: 1.0
 * ==========================================
 */

import { ProfileContext } from "@/core/context/profile/ProfileContext";
import { JourneyContext } from "@/core/context/journey/JourneyContext";
import { MeetingContext } from "@/core/context/meeting/MeetingContext";
import { UploadContext } from "@/core/context/upload/UploadContext";
import { TeamContext } from "@/core/context/team/TeamContext";

export interface UnityDataProvider {

    getProfile(): Promise<ProfileContext>;

    getJourney(): Promise<JourneyContext>;

    getMeeting(): Promise<MeetingContext>;

    getUpload(): Promise<UploadContext>;

    getTeam(): Promise<TeamContext>;

}
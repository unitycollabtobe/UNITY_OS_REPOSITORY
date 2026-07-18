/**
 * ==========================================
 * UNITY OS
 * Profile Mapper
 * Version: 1.0
 * ==========================================
 */

import { ProfileContext } from "./ProfileContext";
import { mockUser } from "@/data/mock/mockUser";
import { AccountStatus, UserRole } from "@/types/enums";

export class ProfileMapper {
  static toContext(): ProfileContext {
    return {
      id: mockUser.id,

      unityCode: mockUser.id,

      firstName: mockUser.firstName,

      lastName: mockUser.lastName,

      email: "",

      role: UserRole.COLLABORATOR,

      journey: mockUser.path.name,

      accountStatus: AccountStatus.ACTIVE,
    };
  }
}
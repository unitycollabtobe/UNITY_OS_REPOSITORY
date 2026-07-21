/**
 * ==========================================
 * UNITY OS
 * Profile Mapper
 * Version: 2.0
 * ==========================================
 */

import { ProfileContext } from "./ProfileContext";
import { mockUser } from "@/data/mock/mockUser";

export class ProfileMapper {
  static toContext(): ProfileContext {
    return {
      id: mockUser.id,

      unityCode: mockUser.unityCode,

      firstName: mockUser.firstName,

      lastName: mockUser.lastName,

      email: mockUser.email,

      role: mockUser.role,

      accountStatus: mockUser.status,
    };
  }
}
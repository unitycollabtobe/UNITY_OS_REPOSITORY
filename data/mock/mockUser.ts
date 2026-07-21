// ===========================================
// UNITY OS
// Mock User
// Version: 2.0
// ===========================================

import { User } from "@/types/user/user";
import { AccountStatus, UserRole } from "@/types/enums";

export const mockUser: User = {
  id: "USR-0001",

  unityCode: "UNI-0001",

  firstName: "Simone",

  lastName: "Adamo",

  email: "simone@example.com",

  avatar: "",

  role: UserRole.COLLABORATOR,

  status: AccountStatus.ACTIVE,

  sponsorId: undefined,

  createdAt: new Date(),

  updatedAt: new Date(),
};
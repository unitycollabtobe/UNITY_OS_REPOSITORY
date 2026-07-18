import { AccountStatus, UserRole } from "@/types/enums";

export interface ProfileContext {
  id: string;

  unityCode: string;

  firstName: string;

  lastName: string;

  email: string;

  role: UserRole;

  journey: string;

  accountStatus: AccountStatus;
}
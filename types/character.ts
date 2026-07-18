// ===========================================
// UNITY OS
// Character Model
// Version: 1.0
// ===========================================

export type CharacterRole =
  | "navigator"
  | "mentor"
  | "speaker";

export interface Character {
  id: string;

  name: string;

  avatar: string;

  role: CharacterRole;

  description: string;
}
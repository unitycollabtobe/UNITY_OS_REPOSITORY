// ===========================================
// UNITY OS
// Roadmap Model
// Version: 2.0
// ===========================================

export type RoadmapPath =
  | "standard"
  | "identity";

export interface Roadmap {

  id: string;

  title: string;

  description: string;

  path: RoadmapPath;

  milestoneIds: string[];

}
// ===========================================
// UNITY OS
// Roadmap Model
// Version: 1.1
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

  estimatedMonths: number;

  active: boolean;

  createdAt: string;

  updatedAt: string;

}
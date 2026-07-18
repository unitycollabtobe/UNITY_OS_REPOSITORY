// ===========================================
// UNITY OS
// Journey Engine
// Version: 3.0
// ===========================================

import { milestones } from "@/data/static/milestones";

import { Milestone } from "@/types/milestone";

export class JourneyEngine {

  getJourney(): Milestone[] {
    return milestones;
  }

  getTotalMilestones(): number {
    return milestones.length;
  }

  hasMilestone(milestoneId: string): boolean {
    return milestones.some(
      (milestone) => milestone.id === milestoneId
    );
  }

  getMilestone(milestoneId: string): Milestone | undefined {
    return milestones.find(
      (milestone) => milestone.id === milestoneId
    );
  }

  getFirstMilestone(): Milestone | undefined {
    return milestones[0];
  }

  getLastMilestone(): Milestone | undefined {
    return milestones[milestones.length - 1];
  }

}
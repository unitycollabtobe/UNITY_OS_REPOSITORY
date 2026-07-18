// ===========================================
// UNITY OS
// Milestone Engine
// Version: 1.1
// ===========================================

import { milestones } from "@/data/static/milestones";
import { userMilestones } from "@/data/static/userMilestones";

import { Milestone } from "@/types/milestone";
import { MilestoneProgress } from "@/types/milestoneProgress";

export class MilestoneEngine {

  getCurrentMilestone(userId: string): Milestone {

    const progress = userMilestones.find(
      (item) =>
        item.userId === userId &&
        item.unlocked &&
        !item.completed
    );

    // Nessun progresso trovato:
    // restituisce la prima milestone del percorso.
    if (!progress) {
      return milestones[0];
    }

    const milestone = milestones.find(
      (item) => item.id === progress.milestoneId
    );

    // Sicurezza: se per qualsiasi motivo
    // la milestone non esiste,
    // riparte dalla prima.
    return milestone ?? milestones[0];

  }

  getProgress(
    userId: string,
    milestoneId: string
  ): MilestoneProgress | null {

    return (
      userMilestones.find(
        (item) =>
          item.userId === userId &&
          item.milestoneId === milestoneId
      ) ?? null
    );

  }

}
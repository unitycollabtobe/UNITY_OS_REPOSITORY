// ===========================================
// UNITY OS
// Assessment Service
// Version: 1.0
// ===========================================

export interface AssessmentData {

  collaborators: number;

  activeUsers: number;

}

export interface AssessmentResult {

  level: number;

  phase: string;

  completed: boolean;

}

export class AssessmentService {

  /**
   * Valuta il punto di partenza del collaboratore.
   */
  evaluate(
    data: AssessmentData
  ): AssessmentResult {

    const total =
      data.collaborators +
      data.activeUsers;

    if (total === 0) {

      return {

        level: 0,

        phase: "START",

        completed: false,

      };

    }

    return {

      level: total,

      phase: "ASSESSMENT_COMPLETED",

      completed: true,

    };

  }

}
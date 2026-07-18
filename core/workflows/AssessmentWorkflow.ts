// ===========================================
// UNITY OS
// Assessment Workflow
// Version: 1.0
// ===========================================

import {
  AssessmentData,
  AssessmentResult,
  AssessmentService,
} from "../services/AssessmentService";

export interface AssessmentWorkflowResult {

  assessment: AssessmentResult;

  nextStep: string;

}

export class AssessmentWorkflow {

  private readonly assessmentService: AssessmentService;

  constructor() {

    this.assessmentService = new AssessmentService();

  }

  /**
   * Avvia il workflow iniziale di Unity.
   */
  execute(
    data: AssessmentData
  ): AssessmentWorkflowResult {

    const assessment =
      this.assessmentService.evaluate(data);

    return {

      assessment,

      nextStep: assessment.completed
        ? "FIRST_MISSION"
        : "WELCOME",

    };

  }

}
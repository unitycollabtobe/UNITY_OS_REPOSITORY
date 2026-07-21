// ===========================================
// UNITY OS
// User Profile Model
// Version: 2.0
// ===========================================

import { AssessmentResult } from "../assessment/assessmentResult";
import { Journey } from "../journey/journey";
import { User } from "./user";

export interface UserProfile {

  /**
   * Dati anagrafici del collaboratore.
   */
  user: User;

  /**
   * Percorso corrente.
   */
  journey: Journey;

  /**
   * Risultato dell'assessment iniziale.
   */
  assessment: AssessmentResult;

}
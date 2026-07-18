import { UnityContext } from "../context/UnityContext";

import { DecisionRules } from "./DecisionRules";
import { DecisionResult } from "./DecisionTypes";

export class DecisionEngine {
  evaluate(context: UnityContext): DecisionResult {
    if (context.profile.accountStatus !== "ACTIVE") {
      return DecisionRules[0];
    }

    if (context.journey.path === "NONE") {
      return DecisionRules[1];
    }

    if (context.meeting.pendingMeetings === 0) {
      return DecisionRules[2];
    }

    if (context.upload.uploadedUtilities === 0) {
      return DecisionRules[3];
    }

    if (context.upload.pendingUtilities > 0) {
      return DecisionRules[4];
    }

    return DecisionRules[6];
  }
}
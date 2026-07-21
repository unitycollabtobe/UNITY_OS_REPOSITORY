import { UnityContext } from "../context/UnityContext";

import { DecisionRules } from "./DecisionRules";
import { DecisionResult } from "./DecisionTypes";

export class DecisionEngine {

  evaluate(
    context: UnityContext
  ): DecisionResult {

    if (context.profile.accountStatus !== "ACTIVE") {
      return DecisionRules.ACCOUNT_SETUP;
    }

    if (context.journey.path === "NONE") {
      return DecisionRules.CHOOSE_PATH;
    }

    if (context.meeting.nextMeetingId === null) {
      return DecisionRules.BOOK_MEETING;
    }

    if (context.upload.uploadedUtilities === 0) {
      return DecisionRules.UPLOAD_FIRST_UTILITY;
    }

    if (context.upload.pendingUtilities > 0) {
      return DecisionRules.WAIT_REVIEW;
    }

    return DecisionRules.OPEN_ROADMAP;

  }

}
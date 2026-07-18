export interface DecisionState {
  accountCompleted: boolean;
  pathSelected: boolean;
  meetingBooked: boolean;
  firstUtilityUploaded: boolean;
  waitingReview: boolean;
  missionAvailable: boolean;
}

export const defaultDecisionState: DecisionState = {
  accountCompleted: false,
  pathSelected: false,
  meetingBooked: false,
  firstUtilityUploaded: false,
  waitingReview: false,
  missionAvailable: false,
};

export function getDecisionState(
  state?: Partial<DecisionState>
): DecisionState {
  return {
    ...defaultDecisionState,
    ...state,
  };
}
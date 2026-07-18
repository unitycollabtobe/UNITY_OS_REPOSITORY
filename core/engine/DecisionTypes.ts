export type DecisionPriority = "low" | "medium" | "high";

export type NextAction =
  | "SETUP_ACCOUNT"
  | "CHOOSE_PATH"
  | "BOOK_MEETING"
  | "UPLOAD_FIRST_UTILITY"
  | "WAIT_REVIEW"
  | "START_MISSION"
  | "OPEN_ROADMAP";

export interface DecisionResult {
  nextAction: NextAction;
  title: string;
  description: string;
  priority: DecisionPriority;
  completed: boolean;
  progress: number;
}
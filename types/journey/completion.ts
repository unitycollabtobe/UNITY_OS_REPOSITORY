export type CompletionStatus =
  | "pending"
  | "completed"
  | "failed"
  | "skipped";

export interface UnityCompletion {
  id: string;

  actionId: string;

  userId: string;

  status: CompletionStatus;

  startedAt?: string;

  completedAt?: string;

  durationMinutes?: number;

  notes?: string;

  createdAt: string;

  updatedAt: string;
}
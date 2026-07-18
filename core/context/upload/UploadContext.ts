import { UploadStatus } from "@/types/enums";

export interface UploadContext {
  uploadedUtilities: number;

  pendingUtilities: number;

  completedRaffronti: number;

  pendingRaffronti: number;

  status: UploadStatus;
}
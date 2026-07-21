// ===========================================
// UNITY OS
// Upload Model
// Version: 2.0
// ===========================================

export type UploadStatus =
  | "waiting"
  | "checking"
  | "ready"
  | "error";

export interface UploadFile {

  id: string;

  name: string;

  size: number;

  /**
   * MIME type
   * (application/pdf, image/jpeg...)
   */
  type: string;

  pages?: number;

  status: UploadStatus;

}
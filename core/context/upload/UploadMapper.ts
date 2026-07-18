/**
 * ==========================================
 * UNITY OS
 * Upload Mapper
 * Version: 1.0
 * ==========================================
 */

import { UploadContext } from "./UploadContext";
import { mockUpload } from "@/data/mock/mockUpload";
import { UploadStatus } from "@/types/enums";

export class UploadMapper {
  static toContext(): UploadContext {
    return {
      uploadedUtilities: 0,

      pendingUtilities: 0,

      completedRaffronti: 0,

      pendingRaffronti: 0,

      status: UploadStatus.NONE,
    };
  }
}
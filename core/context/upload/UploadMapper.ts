import { UploadContext } from "./UploadContext";
import { mockUploadContext } from "@/data/mock/mockUploadContext";

export class UploadMapper {
  static toContext(): UploadContext {
    return {
      uploadedUtilities: mockUploadContext.uploadedUtilities,
      pendingUtilities: mockUploadContext.pendingUtilities,
    };
  }
}
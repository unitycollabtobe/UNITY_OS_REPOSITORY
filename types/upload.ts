export interface UploadFile {

  id: string;

  name: string;

  size: number;

  type: string;

  pages?: number;

  preview?: string;

  status:
    | "waiting"
    | "checking"
    | "ready"
    | "error";

}
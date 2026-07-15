export interface Upload {

  id: string;

  ownerId: string;

  providerId: string;

  files: number;

  status:
    | "draft"
    | "checking"
    | "ready"
    | "sent";

}
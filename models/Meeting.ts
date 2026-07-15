export interface Meeting {

  id: string;

  title: string;

  description: string;

  type:
    | "online"
    | "presence";

  visibility:
    | "public"
    | "private";

  creatorRole:
    | "admin"
    | "trainer"
    | "speaker"
    | "collaborator";

  status:
    | "draft"
    | "pending"
    | "approved"
    | "completed"
    | "cancelled";

  seats: number;

  booked: number;

}
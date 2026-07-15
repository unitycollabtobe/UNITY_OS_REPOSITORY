export interface User {

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  phone: string;

  role:
    | "admin"
    | "trainer"
    | "speaker"
    | "collaborator";

  path:
    | "standard"
    | "identity";

  progress: number;

}
import { UploadFile } from "@/types/upload/upload";

export const mockUploadFiles: UploadFile[] = [

  {
    id: "1",
    name: "Bolletta_Luce.pdf",
    size: 2415000,
    type: "PDF",
    pages: 2,
    status: "ready",
  },

  {
    id: "2",
    name: "Bolletta_Gas.jpg",
    size: 1980000,
    type: "JPG",
    status: "checking",
  },

];
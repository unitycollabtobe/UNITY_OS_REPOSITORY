import UploadHeader from "./UploadHeader";
import UploadDropArea from "./UploadDropArea";
import UploadFileList from "./UploadFileList";
import UploadChecklist from "./UploadChecklist";
import UploadMail from "./UploadMail";
import UploadFooter from "./UploadFooter";

export default function UploadWindow() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#131c28] shadow-2xl">

      <UploadHeader />

      <UploadDropArea />

      <UploadFileList />

      <UploadChecklist />

      <UploadMail />

      <UploadFooter />

    </div>
  );
}
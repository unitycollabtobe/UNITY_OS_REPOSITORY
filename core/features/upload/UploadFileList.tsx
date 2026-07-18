import { mockUploadFiles } from "@/data/mock/mockUploadFiles";

export default function UploadFileList() {
  return (
    <div className="border-b border-white/10 p-8">

      <h3 className="mb-6 text-xl font-semibold text-white">
        Documenti caricati
      </h3>

      <div className="space-y-4">

        {mockUploadFiles.map((file) => (

          <div
            key={file.id}
            className="flex items-center justify-between rounded-2xl bg-white/5 p-5"
          >

            <div>

              <p className="font-semibold text-white">
                {file.name}
              </p>

              <p className="mt-1 text-sm text-gray-400">
                {file.type}
                {file.pages ? ` • ${file.pages} pagine` : ""}
              </p>

            </div>

            <div>

              {file.status === "ready" && (
                <span className="text-green-400">
                  ✔ Pronto
                </span>
              )}

              {file.status === "checking" && (
                <span className="text-yellow-400">
                  Controllo...
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
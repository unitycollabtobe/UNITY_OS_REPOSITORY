"use client";

import { useRef, useState } from "react";

export default function UploadDropArea() {

  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  function openExplorer() {
    inputRef.current?.click();
  }

  function addFiles(files: File[]) {
    setSelectedFiles(current => [...current, ...files]);
  }

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {

    const files = e.target.files;

    if (!files) return;

    addFiles(Array.from(files));

    e.target.value = "";

  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {

    e.preventDefault();

    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);

    if (files.length === 0) return;

    addFiles(files);

  }

  function removeFile(index: number) {

    setSelectedFiles(current =>
      current.filter((_, i) => i !== index)
    );

  }

  function formatSize(size: number) {

    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(0)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(2)} MB`;

  }

  return (

    <div className="border-b border-white/10 p-8">

      <input
        ref={inputRef}
        type="file"
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        onChange={handleFiles}
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`rounded-3xl border-2 border-dashed p-12 text-center transition-all duration-300 ${
          isDragging
            ? "border-cyan-400 bg-cyan-500/10 scale-[1.02]"
            : "border-cyan-500/30"
        }`}
      >

        <div className="text-6xl">
          {isDragging ? "📥" : "📄"}
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-white">
          {isDragging
            ? "Rilascia i documenti qui"
            : "Trascina qui i documenti"}
        </h3>

        <p className="mt-3 text-gray-400">
          oppure utilizza uno dei pulsanti qui sotto.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <button
            onClick={openExplorer}
            className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            📄 Carica File
          </button>

          <button
            onClick={openExplorer}
            className="rounded-2xl border border-white/15 px-8 py-4 text-white transition hover:bg-white/5"
          >
            📷 Scatta Foto
          </button>

        </div>

      </div>

      {selectedFiles.length > 0 && (

        <div className="mt-8">

          <h4 className="mb-5 text-lg font-semibold text-cyan-400">
            File selezionati
          </h4>

          <div className="space-y-4">

            {selectedFiles.map((file, index) => {

              const isPdf = file.type === "application/pdf";

              return (

                <div
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-white/5 p-5 transition hover:border-cyan-400"
                >

                  <div className="flex items-center gap-4">

                    <div className="text-4xl">
                      {isPdf ? "📕" : "🖼️"}
                    </div>

                    <div>

                      <div className="font-medium text-white">
                        {file.name}
                      </div>

                      <div className="mt-1 text-sm text-gray-400">
                        {isPdf ? "Documento PDF" : "Immagine"}
                        {" • "}
                        {formatSize(file.size)}
                      </div>

                    </div>

                  </div>

                  <button
                    onClick={() => removeFile(index)}
                    className="rounded-lg px-3 py-2 text-red-400 transition hover:bg-red-500/20 hover:text-red-300"
                  >
                    ✕
                  </button>

                </div>

              );

            })}

          </div>

        </div>

      )}

    </div>

  );

}
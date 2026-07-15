import Card from "@/core/ui/Card";
import Button from "@/core/ui/Button";

import { mockUpload } from "@/data/mockUpload";

export default function UploadCenter() {
  return (
    <Card className="space-y-6">

      <div>

        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          INVIA DOCUMENTI
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Upload Center
        </h2>

        <p className="mt-2 text-gray-400">
          Carica uno o più documenti da inviare.
        </p>

      </div>

      <div className="rounded-2xl border-2 border-dashed border-cyan-500/30 p-10 text-center">

        <p className="text-lg font-semibold">
          Trascina qui i documenti
        </p>

        <p className="mt-2 text-gray-500">
          oppure utilizza i pulsanti qui sotto
        </p>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <Button>
          📄 Carica File
        </Button>

        <Button>
          📷 Scatta Foto
        </Button>

      </div>

      <div className="rounded-2xl bg-white/5 p-5">

        <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">
          Controlla prima dell'invio
        </p>

        <div className="space-y-2">

          {mockUpload.checklist.map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >
              <span>✔</span>

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

      <Button className="w-full">
        Invia Documenti
      </Button>

    </Card>
  );
}
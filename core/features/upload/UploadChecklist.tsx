export default function UploadChecklist() {
  return (
    <div className="border-b border-white/10 p-8">

      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
        CONTROLLI
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-white">
        Prima dell'invio
      </h3>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-4">
          <span className="text-green-400 text-xl">✔</span>
          <span className="text-gray-300">
            Documento completo
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-green-400 text-xl">✔</span>
          <span className="text-gray-300">
            Tutte le pagine presenti
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-green-400 text-xl">✔</span>
          <span className="text-gray-300">
            Immagini nitide
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-green-400 text-xl">✔</span>
          <span className="text-gray-300">
            Nessun riflesso evidente
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-green-400 text-xl">✔</span>
          <span className="text-gray-300">
            Testo perfettamente leggibile
          </span>
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">

        <p className="font-semibold text-yellow-300">
          💡 Consiglio
        </p>

        <p className="mt-2 text-gray-300 leading-7">
          Se utilizzi la fotocamera assicurati di fotografare
          ogni pagina completamente, senza tagliare bordi,
          evitando ombre e riflessi.
        </p>

      </div>

    </div>
  );
}
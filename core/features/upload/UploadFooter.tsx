export default function UploadFooter() {
  return (
    <div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          🦉 UNITY
        </p>

        <p className="mt-3 max-w-xl text-gray-400">
          I documenti verranno preparati automaticamente.
          Prima dell'invio potrai verificare destinatario,
          oggetto, allegati e contenuto della mail.
        </p>

      </div>

      <div className="flex gap-4">

        <button className="rounded-2xl border border-white/15 px-8 py-4 text-white transition hover:bg-white/5">
          Annulla
        </button>

        <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
          🚀 Invia Documenti
        </button>

      </div>

    </div>
  );
}
import ThemeToggle from "../ui/ThemeToggle";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#07111B]/90 px-6 backdrop-blur-xl lg:px-10">

      {/* Titolo */}

      <div>

        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Ogni passo ti restituisce tempo.
        </p>

      </div>

      {/* Azioni */}

      <div className="flex items-center gap-4">

        {/* Ricerca */}

        <div className="hidden lg:block">

          <input
            type="text"
            placeholder="Cerca..."
            className="w-64 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition focus:border-cyan-400"
          />

        </div>

        {/* Notifiche */}

        <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
          🔔
        </button>

        {/* Tema */}

        <ThemeToggle />

        {/* Profilo */}

        <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
            S
          </div>

          <div className="text-left">

            <p className="text-sm font-semibold">
              Simone
            </p>

            <p className="text-xs text-gray-400">
              Collaboratore
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}
import { ReactNode } from "react";
import Topbar from "./Topbar";

interface OSLayoutProps {
  children: ReactNode;
}

const menu = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "🧭", label: "Percorso" },
  { icon: "🎯", label: "Missioni" },
  { icon: "📅", label: "Meeting" },
  { icon: "📚", label: "Biblioteca" },
  { icon: "👥", label: "La mia rete" },
  { icon: "👤", label: "Profilo" },
];

export default function OSLayout({ children }: OSLayoutProps) {
  return (
    <div className="min-h-screen bg-[#07111B] text-white">

      <div className="flex min-h-screen">

        {/* SIDEBAR */}

        <aside className="sticky top-0 hidden h-screen w-72 flex-col border-r border-white/10 bg-gradient-to-b from-[#08111F] via-[#0A1624] to-[#07111B] md:flex">

          {/* HEADER */}

          <div className="border-b border-white/10 p-8">

            <p className="text-xs uppercase tracking-[0.30em] text-cyan-400">
              ● UNITY OS
            </p>

            <h1 className="mt-4 text-3xl font-bold">
              Simone Adamo
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              Collaboratore Identity
            </p>

            <div className="mt-6">

              <div className="mb-2 flex justify-between text-xs text-gray-400">

                <span>Percorso</span>

                <span>18%</span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                  style={{
                    width: "18%",
                  }}
                />

              </div>

            </div>

          </div>

          {/* MENU */}

          <nav className="flex-1 px-4 py-6">

            <div className="space-y-2">

              {menu.map((item, index) => (

                <button
                  key={item.label}
                  className={`group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    index === 0
                      ? "border-cyan-500/30 bg-cyan-500/15 text-white shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      : "border-transparent text-gray-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>

                  <span className="font-medium">
                    {item.label}
                  </span>

                </button>

              ))}

            </div>

          </nav>

          {/* GUIDE VIVE */}

          <div className="border-t border-white/10 p-6">

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-5">

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                GUIDE VIVE
              </p>

              <h3 className="mt-3 text-lg font-semibold">
                📘 Enrico
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                Sta leggendo il Vademecum.
                <br />
                Quando avrai bisogno sarà qui ad aiutarti.
              </p>

            </div>

          </div>

        </aside>

        {/* CONTENUTO */}

        <main className="flex min-w-0 flex-1 flex-col">

          <Topbar />

          <section className="flex-1 p-6 lg:p-10">

            {children}

          </section>

        </main>

      </div>

    </div>
  );
}
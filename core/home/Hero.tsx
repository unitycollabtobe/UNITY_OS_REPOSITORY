export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      <div className="text-center">

        <p className="uppercase tracking-[0.8em] text-cyan-400">
         UNITY OS
        </p>

        <h1 className="text-6xl font-extrabold leading-tight text-white md:text-5xl">
  <span className="-ml-2 inline-block">
    Per le
  </span>

  <br />

  <span className="text-cyan-400 drop-shadow-[0_0_35px_rgba(34,211,238,0.45)]">
    persone.
  </span>
</h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-300">
          Un percorso semplice, umano e duplicabile per costruire una rendita
          che restituisca tempo.
        </p>

        <button
          className="
            mt-12
            rounded-xl
            bg-cyan-500
            px-8
            py-4
            text-lg
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:bg-cyan-400
            hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
          "
        >
          Inizia il percorso
        </button>

      </div>
    </section>
  );
}
export default function Features() {
  return (
    <section className="bg-[#07101d] py-20">

      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          PERCHÉ UNITY
        </p>

        <h2 className="text-center text-5xl font-bold text-white">
          Ti guida.
          <br />
          Ti insegna.
          <br />
          Ti accompagna.
        </h2>

        <p className="mx-auto mt-6 mb-14 max-w-3xl text-center text-lg leading-8 text-gray-400">
          Un ecosistema costruito per accompagnarti passo dopo passo,
          fino a renderti autonomo.
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0d1726] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

            <div className="mb-4 text-4xl">🎯</div>

            <h3 className="mb-3 text-xl font-bold text-white">
              Ti guida
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              Ogni passo è spiegato con semplicità.
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0d1726] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

            <div className="mb-4 text-4xl">🧠</div>

            <h3 className="mb-3 text-xl font-bold text-white">
              Ti insegna
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              Guide e strumenti sempre disponibili.
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0d1726] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

            <div className="mb-4 text-4xl">🤝</div>

            <h3 className="mb-3 text-xl font-bold text-white">
              Ti accompagna
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              Non sarai mai lasciato solo.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
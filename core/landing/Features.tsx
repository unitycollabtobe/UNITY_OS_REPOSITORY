export default function Features() {
  return (
    <section className="bg-[#07101d] py-28">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-6 text-center text-5xl font-bold text-white">
        <p className="mb-4 text-center uppercase tracking-[0.4em] text-cyan-400">
  PERCHÉ UNITY E'
</p><p className="mx-auto mb-20 max-w-3xl text-center text-xl text-gray-400">
  Un ecosistema costruito per guidarti, insegnarti e accompagnarti
  fino alla tua autonomia.
</p>
          Perché Unity
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0d1726] p-10 transition hover:-translate-y-2 hover:border-cyan-400">

            <div className="mb-6 text-5xl">🎯</div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Ti guida
            </h3>

            <p className="text-gray-400">
              Non sarai mai lasciato solo.
              Ogni passo del percorso è spiegato con semplicità.
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0d1726] p-10 transition hover:-translate-y-2 hover:border-cyan-400">

            <div className="mb-6 text-5xl">🧠</div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Ti insegna
            </h3>

            <p className="text-gray-400">
              Guide, video e strumenti sempre disponibili,
              nel momento giusto.
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0d1726] p-10 transition hover:-translate-y-2 hover:border-cyan-400">

            <div className="mb-6 text-5xl">🤝</div>

            <h3 className="mb-4 text-2xl font-bold text-white">
              Ti accompagna
            </h3>

            <p className="text-gray-400">
              Unity cresce insieme a te,
              dal primo giorno fino alla rendita.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
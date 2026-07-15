const steps = [
  {
    number: "01",
    title: "Entra in Unity",
    description:
      "Accedi con il tuo codice collaboratore e trova tutto ciò che ti serve in un unico posto.",
  },
  {
    number: "02",
    title: "Segui il percorso",
    description:
      "Ogni missione ti viene mostrata nel momento giusto, senza stress e senza confusione.",
  },
  {
    number: "03",
    title: "Metti in pratica",
    description:
      "Utilizza gli strumenti, invia le utenze e completa le attività con semplicità.",
  },
  {
    number: "04",
    title: "Cresci",
    description:
      "Ogni passo completato costruisce la tua autonomia e ti avvicina alla rendita.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#08111f] py-40">

      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-5 text-center uppercase tracking-[0.4em] text-cyan-400">
          IL PERCORSO
        </p>

        <h2 className="mb-24 text-center text-6xl font-bold text-white">
          Quattro passi.
          <br />
          Una sola direzione.
        </h2>

        <div className="space-y-8">

          {steps.map((step) => (

            <div
              key={step.number}
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-[#0d1726]/80 px-10 py-10 transition duration-500 hover:border-cyan-400 hover:bg-[#122034]"
            >

              <div className="flex items-center gap-8">

                <div className="text-7xl font-black text-cyan-500/20 transition group-hover:text-cyan-400">
                  {step.number}
                </div>

                <div>

                  <h3 className="mb-2 text-3xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="max-w-2xl text-lg text-gray-400">
                    {step.description}
                  </p>

                </div>

              </div>

              <div className="text-4xl text-cyan-400 transition group-hover:translate-x-2">
                →
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
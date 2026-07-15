import Card from "@/core/ui/Card";

export default function UploadWarning() {
  return (
    <Card>

      <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
        ATTENZIONE
      </p>

      <div className="mt-5 space-y-3 text-gray-300">

        <p>✔ Fotografa il documento completo.</p>

        <p>✔ Includi tutte le pagine.</p>

        <p>✔ Evita riflessi.</p>

        <p>✔ Evita immagini sfocate.</p>

        <p>✔ Controlla che il testo sia leggibile.</p>

      </div>

    </Card>
  );
}
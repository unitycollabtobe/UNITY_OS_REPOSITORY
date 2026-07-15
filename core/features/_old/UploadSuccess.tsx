import Card from "@/core/ui/Card";

export default function UploadSuccess() {
  return (
    <Card>

      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
        🦉 UNITY
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Documenti inviati
      </h3>

      <p className="mt-3 text-gray-400">
        Il sistema ha inviato correttamente i documenti
        al Provider configurato.
      </p>

    </Card>
  );
}
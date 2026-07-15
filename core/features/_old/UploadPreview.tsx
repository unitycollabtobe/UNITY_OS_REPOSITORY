import Card from "@/core/ui/Card";

export default function UploadPreview() {
  return (
    <Card>

      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
        DOCUMENTI
      </p>

      <div className="mt-6 space-y-4">

        <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

          <div>

            <p className="font-semibold">
              Bolletta_Luce.pdf
            </p>

            <p className="text-sm text-gray-400">
              PDF • 2 pagine
            </p>

          </div>

          <span className="text-green-400">
            ✔
          </span>

        </div>

      </div>

    </Card>
  );
}
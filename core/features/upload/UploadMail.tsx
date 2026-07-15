import { SYSTEM } from "@/config/system";
import { mockProfile } from "@/data/mockProfile";

export default function UploadMail() {
  return (
    <div className="border-b border-white/10 p-8">

      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
        RIEPILOGO EMAIL
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-white">
        Pronta per l'invio
      </h3>

      <div className="mt-8 rounded-2xl bg-white/5 p-6">

        <div className="space-y-4">

          <div className="flex justify-between">

            <span className="text-gray-400">
              Destinatario
            </span>

            <span className="font-medium text-white">
              {SYSTEM.provider.uploadEmail}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-400">
              Oggetto
            </span>

            <span className="font-medium text-white">
              {SYSTEM.provider.uploadSubject}
            </span>

          </div>

        </div>

        <div className="mt-8 rounded-xl bg-[#0b1623] p-5">

          <pre className="whitespace-pre-wrap text-sm leading-7 text-gray-300 font-sans">
{SYSTEM.upload.defaultMessage}

{"\n\n"}

{mockProfile.firstName} {mockProfile.lastName}

{"\n"}

{mockProfile.phone}

{"\n"}

{mockProfile.email}
          </pre>

        </div>

      </div>

    </div>
  );
}
import Card from "@/core/ui/Card";

import { SYSTEM } from "@/config/system";
import { mockProfile } from "@/data/mock/mockProfile";

export default function UploadMailPreview() {
  return (
    <Card className="space-y-6">

      <div>

        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          RIEPILOGO INVIO
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          Email pronta
        </h2>

      </div>

      <div className="space-y-3 text-sm">

        <div className="flex justify-between">

          <span className="text-gray-400">
            Destinatario
          </span>

          <span>
            {SYSTEM.provider.uploadEmail}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Oggetto
          </span>

          <span>
            {SYSTEM.provider.uploadSubject}
          </span>

        </div>

      </div>

      <div className="rounded-2xl bg-white/5 p-5 whitespace-pre-line text-gray-300 leading-7">

{SYSTEM.upload.defaultMessage}

{"\n\n"}

{mockProfile.firstName} {mockProfile.lastName}

{"\n"}

{mockProfile.phone}

{"\n"}

{mockProfile.email}

      </div>

    </Card>
  );
}
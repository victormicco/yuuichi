"use client";

import { Button } from "../../../../components/ui/button";
import { Icons } from "../../../../components/ui/icons";
import { TextField } from "../../../../components/ui/textfield";

export default function ReferralSection() {
  return (
    <section className="flex flex-col gap-y-6">
      <div>
        <h3 className=" font-bold heading-3 text-primary">Indique amigos</h3>
        <h4 className="text-md text-muted-fg">
          Convide mais pessoas para o evento e concorra a prêmios exclusivos! É
          só compartilhar o link abaixo e acompanhar as inscrições:
        </h4>
      </div>
      <div className="flex flex-col gap-y-4">
        <TextField.Root className="w-full">
          <TextField.Slot>
            <Icons.Chain className="size-4" />
          </TextField.Slot>
          <TextField.Input
            placeholder="Digite seu nome completo"
            defaultValue={"https://yuuichi.com/referral/1312313131asda123"}
            className="text-muted-fg"
          />
          <TextField.Slot>
            <Button
              className="w-full rounded-lg"
              variant="ghost"
              onPress={() => {
                navigator.clipboard.writeText(
                  "https://yuuichi.com/referral/1312313131asda123"
                );
              }}
            >
              <Icons.Copy className="size-4" />
            </Button>
          </TextField.Slot>
        </TextField.Root>
      </div>
    </section>
  );
}

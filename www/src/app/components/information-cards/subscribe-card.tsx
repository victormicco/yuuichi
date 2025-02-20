import { Card } from "@/components/ui/card";
import { Icons } from "../../../components/ui/icons";
import SubscribeForm from "./subscribe-form/subscribe-form";

export default function SubscribeCard() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title className="font-bold text-2xl">Inscrever-se</Card.Title>
      </Card.Header>
      <Card.Content className="grid gap-4 w-lg ">
        <SubscribeForm />
      </Card.Content>
    </Card.Root>
  );
}

import { Card } from "@/components/ui/card";
import { Icons } from "../../../components/ui/icons";

export default function AboutEventCard() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title className="font-bold text-2xl">Sobre o evento</Card.Title>
        <Card.Description>You have</Card.Description>
      </Card.Header>
      <Card.Content className="grid gap-4 max-w-4xl">
        <div className="flex items-center gap-4 rounded-md border p-4">
          <p className="p">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
          </p>
        </div>
        <div></div>
      </Card.Content>
      <Card.Footer>
        <p className="flex items-center gap-2 text-purple-500">
          <Icons.Wire />
          <span>Inscreva-se para receber novidades sobre o evento</span>
        </p>
      </Card.Footer>
    </Card.Root>
  );
}

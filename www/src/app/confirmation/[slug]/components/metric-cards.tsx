"use client";
import { Card } from "../../../../components/ui/card";
import { Icons } from "../../../../components/ui/icons";

export default function MetricCards() {
  interface Metric {
    icon: React.ReactNode;
    title: string;
    value: string;
  }

  const metrics: Metric[] = [
    { icon: <Icons.Sun />, title: "Inscritos", value: "1.200" },
    { icon: <Icons.Moon />, title: "Palestrantes", value: "20" },
    { icon: <Icons.Laptop />, title: "Workshops", value: "10" },
  ];
  return (
    <section className="flex  gap-x-7">
      {metrics.map((metric, index) => (
        <Card.Root key={index} className="flex-1">
          <Card.Header className="text-primary">{metric.icon}</Card.Header>
          <Card.Content className="flex items-center justify-center flex-col">
            <p className="text-3xl font-bold">{metric.value}</p>
            <p className="text-muted-fg">{metric.title}</p>
          </Card.Content>
        </Card.Root>
      ))}
    </section>
  );
}

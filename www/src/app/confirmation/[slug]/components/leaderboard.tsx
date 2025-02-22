"use client";

import { Card } from "../../../../components/ui/card";

export default function Leaderboard() {
  interface LeaderboardData {
    position: number;
    name: string;
    referrals: number;
  }
  const leaderboardData: LeaderboardData[] = [
    { position: 1, name: "Yuuichi", referrals: 134 },
    { position: 2, name: "Yuuichi", referrals: 57 },
    { position: 3, name: "Yuuichi", referrals: 26 },
  ];
  return (
    <main className="flex flex-col gap-y-4">
      <h1 className="heading-1 font-bold">Leaderboard</h1>
      <section className="flex flex-col gap-y-6">
        {leaderboardData.map((data, index) => (
          <Card.Root key={index} className="flex-1">
            <Card.Header className="text-primary text-2xl font-bold  text-center">
              {data.position}°
            </Card.Header>
            <Card.Content className="flex items-center justify-center flex-col">
              <p className="text-3xl font-bold">{data.referrals}</p>
              <p className="text-muted-fg">{data.name}</p>
            </Card.Content>
          </Card.Root>
        ))}
      </section>
    </main>
  );
}

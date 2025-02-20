import Hero from "../../components/hero";
import AboutEventCard from "../../components/information-cards/about-event-card";
import SubscribeCard from "../../components/information-cards/subscribe-card";

export default function ConfirmationSlugPage() {
  return (
    <main className="min-h-screen flex flex-col p-56 gap-y-6">
      <Hero />
      <section className="flex gap-x-9">
        <AboutEventCard />
        <SubscribeCard />
      </section>
    </main>
  );
}

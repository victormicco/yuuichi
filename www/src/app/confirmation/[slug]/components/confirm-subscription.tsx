import MetricCards from "./metric-cards";
import ReferralSection from "./referral-section";

export default function ConfirmSubscription() {
  return (
    <section className="flex flex-col gap-y-32 ">
      <div>
        <h1 className="text-5xl font-bold">Inscrição Confirmada!</h1>
        <p className="text-lg text-muted-fg">
          Para entrar no evento, acesse o link enviado para seu e-mail.
        </p>
      </div>

      <ReferralSection />
      <MetricCards />
    </section>
  );
}

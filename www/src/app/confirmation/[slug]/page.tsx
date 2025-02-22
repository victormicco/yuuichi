import ConfirmSubscription from "./components/confirm-subscription";
import Leaderboard from "./components/leaderboard";

export default function ConfirmationSlugPage() {
  return (
    <main className="h-screen flex p-56 gap-x-11">
      <ConfirmSubscription />
      <Leaderboard />
    </main>
  );
}

import Image from "next/image";
import { BadgePercent, Lock, Zap } from "lucide-react";
import Glow from "@/app/_components/Glow";
import rewardsShot from "@/assets/images/app/app-pair-rewards.png";

const points = [
  { icon: BadgePercent, text: "Lowest fees in market" },
  { icon: Zap, text: "Fast and secure transactions" },
  { icon: Lock, text: "256-bit secure encryption" },
];

const RewardSection = () => {
  return (
    <section className="relative isolate">
      <Glow className="left-1/2 top-24 h-[min(500px,90vw)] w-[min(950px,130vw)] -translate-x-1/2" />

      <div className="container-page section grid items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={rewardsShot}
            alt="Daily rewards in the FinanceFlow app"
            className="h-auto w-full max-w-[360px] object-contain md:max-w-[460px]"
          />
        </div>

        <div className="flex max-w-xl flex-col items-start gap-6">
          <h2 className="heading-section">
            Earn daily rewards on your idle tokens
          </h2>

          <p className="text-body max-w-md">
            Put the coins you are holding to work and collect rewards paid out
            every single day.
          </p>

          <ul className="flex flex-col gap-4">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-blue">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RewardSection;

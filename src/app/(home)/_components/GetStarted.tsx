import { BadgePercent, Lock, Zap } from "lucide-react";
import Button from "@/app/_components/Button";
import VideoPlayer from "./VideoPlayer";

const points = [
  { icon: BadgePercent, text: "Lowest fees in market" },
  { icon: Zap, text: "Fast and secure transactions" },
  { icon: Lock, text: "256-bit secure encryption" },
];

const GetStarted = () => {
  return (
    <section className="container-page grid items-center gap-10 pb-16 pt-12 md:pb-24 md:pt-16 lg:grid-cols-2 lg:gap-16">
      <div className="flex w-full max-w-xl flex-col items-start gap-6">
        <h2 className="heading-section">Get started today</h2>

        <p className="text-body max-w-md">
          Create an account in minutes and make your first trade the same day.
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

        <div className="mt-2 w-full sm:w-auto">
          <Button content="Download App" isBlue />
        </div>
      </div>

      <div className="w-full lg:justify-self-end lg:max-w-[560px]">
        <VideoPlayer src="/videos/sample.mp4" />
      </div>
    </section>
  );
};

export default GetStarted;

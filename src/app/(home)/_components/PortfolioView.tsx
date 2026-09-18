import Image from "next/image";
import { ArrowLeftRight, CandlestickChart, ShieldCheck, Timer } from "lucide-react";
import Button from "@/app/_components/Button";
import Glow from "@/app/_components/Glow";
import iosShot from "@/assets/images/app/app-ios.png";

const features = [
  {
    icon: ArrowLeftRight,
    title: "Send & Receive",
    text: "Move funds between wallets in seconds, with fees you can predict.",
  },
  {
    icon: CandlestickChart,
    title: "Trading Charts",
    text: "Follow every market with live candles, depth and indicators.",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure Wallet",
    text: "Keys stay on your device, protected by 256-bit encryption.",
  },
  {
    icon: Timer,
    title: "Real Time Trading",
    text: "Orders execute the moment the market hits your price.",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  text,
}: (typeof features)[number]) => (
  <article className="group relative overflow-hidden rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10 transition-colors hover:ring-white/25">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-blue/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
    />

    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue text-white ring-1 ring-white/20">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>

    <h3 className="mb-2 mt-5 text-lg font-semibold">{title}</h3>
    <p className="text-sm leading-relaxed text-white/70">{text}</p>
  </article>
);

const PortfolioView = () => {
  return (
    <section className="relative isolate">
      <Glow className="-right-[15vw] top-10 h-[min(600px,110vw)] w-[min(950px,130vw)]" />

      <div className="container-page section">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center md:mb-16">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Build your crypto portfolio
          </h2>
          <p className="text-body">
            Everything you need to start trading, in one app that works on every
            device you own.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard {...features[0]} />

          <article className="relative flex flex-col items-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-blue to-[#0220a8] p-6 ring-1 ring-white/20 sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl"
            />

            <h3 className="text-center text-lg font-semibold tracking-wide">
              iOS &amp; ANDROID APP
            </h3>
            <p className="max-w-sm text-center text-sm text-white/80">
              One account, perfectly in sync across mobile, tablet and desktop.
            </p>

            <Image
              src={iosShot}
              alt="FinanceFlow mobile app"
              className="-mb-16 mt-auto h-auto w-[200px] max-w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] sm:w-[220px]"
            />
          </article>

          {features.slice(1).map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button content="Download App" isBlue />
        </div>
      </div>
    </section>
  );
};

export default PortfolioView;

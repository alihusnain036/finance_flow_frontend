import Image from "next/image";
import Button from "@/app/_components/Button";
import Glow from "@/app/_components/Glow";
import desktopShot from "@/assets/images/app/app-desktop.png";

const stats = [
  { value: "350+", label: "Coins listed" },
  { value: "$1.4T", label: "Traded volume" },
  { value: "140", label: "Countries" },
];

const Section1 = () => {
  return (
    <section className="relative isolate">
      <Glow className="-left-[20vw] -top-[30vh] h-[min(900px,120vw)] w-[min(900px,120vw)]" />

      <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-8">
        <div className="flex max-w-xl flex-col gap-6">
          <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Buy, trade, and hold 350+ cryptocurrencies
          </h1>

          <p className="text-body max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button content="Download App" isBlue />
            <Button content="View Pricing" urlPath="/pricing" />
          </div>

          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="text-xl font-bold sm:text-2xl">{value}</dt>
                <dd className="mt-0.5 text-[11px] uppercase tracking-widest text-white/50">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-[640px] lg:justify-self-end xl:max-w-[720px]">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 bottom-6 top-10 rounded-[40px] bg-blue/25 blur-3xl"
          />
          <Image
            src={desktopShot}
            alt="FinanceFlow trading terminal"
            priority
            className="relative h-auto w-full rounded-xl object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;

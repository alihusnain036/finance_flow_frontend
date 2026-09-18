import { Check } from "lucide-react";
import { FaExchangeAlt, FaChartBar, FaWallet, FaClock } from "react-icons/fa";
import Button from "@/app/_components/Button";
import Glow from "@/app/_components/Glow";
import PageHeader from "@/app/_components/PageHeader";

const pricingPlans = [
  {
    tier: "Basic",
    price: "$100",
    cadence: "per month",
    description:
      "For getting started with your first trades and a single wallet.",
    features: [
      "Trading up to $100K per month",
      "Windows & macOS App",
      "Standard support",
      "Portfolio tracking",
    ],
    featured: false,
  },
  {
    tier: "Pro",
    price: "$100",
    cadence: "per month",
    description:
      "For active traders who need faster execution and deeper charts.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Advanced charting tools",
      "Premium Support",
    ],
    featured: true,
  },
  {
    tier: "Expert",
    price: "$100",
    cadence: "per month",
    description: "For desks and treasuries that trade at volume every day.",
    features: [
      "Everything included in Pro",
      "Unlimited monthly trading",
      "Dedicated account manager",
      "API access & webhooks",
    ],
    featured: false,
  },
];

const topFeatures = [
  { icon: <FaExchangeAlt />, label: "Send & receive" },
  { icon: <FaChartBar />, label: "Trading Charts" },
  { icon: <FaWallet />, label: "Wallet" },
  { icon: <FaClock />, label: "Real Time Trading" },
];

const PricingSection = () => {
  return (
    <section className="relative isolate">
      <Glow className="left-1/2 -top-[15vh] h-[min(900px,120vw)] w-[min(900px,120vw)] -translate-x-1/2" />

      <div className="container-page section">
        <PageHeader
          align="center"
          title="Pricing"
          description="Simple plans that scale with how much you trade. No hidden spreads, cancel whenever you like."
        />

        <ul className="mx-auto mb-16 mt-12 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
          {topFeatures.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl bg-surface-2/40 px-4 py-5 text-center text-xs ring-1 ring-white/10 transition-colors hover:ring-white/25 sm:flex-row sm:text-left sm:text-sm"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue text-base text-white">
                {item.icon}
              </span>
              <span className="text-white/70">{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.tier}
              className={`relative flex h-full flex-col rounded-3xl p-7 text-left transition-transform duration-300 md:p-8 ${
                plan.featured
                  ? "bg-gradient-to-b from-blue/25 to-surface-2/60 ring-2 ring-blue lg:-translate-y-4 lg:shadow-[0_25px_70px_rgba(3,40,238,0.35)]"
                  : "bg-surface-2/40 ring-1 ring-white/10 hover:ring-white/25"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white shadow-lg">
                  Most popular
                </span>
              )}

              <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
                {plan.tier}
              </h2>

              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-white/50">{plan.cadence}</span>
              </p>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {plan.description}
              </p>

              <ul className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        plan.featured ? "bg-blue" : "bg-white/10"
                      }`}
                    >
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  content="Contact Us"
                  isBlue={plan.featured}
                  fullWidth
                  urlPath="/contact_us"
                />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/50">
          All plans include 256-bit encryption, cold storage and no withdrawal
          fees. Prices exclude local taxes.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

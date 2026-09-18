import { Code2, Eye, Globe2, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Open source",
    text: "Our core libraries are public, auditable and open to contributions from anyone.",
  },
  {
    icon: Globe2,
    title: "Worldwide",
    text: "Available in 140 countries, with local payment methods and support hours.",
  },
  {
    icon: Eye,
    title: "Transparent",
    text: "Every fee is published up front. No spreads hidden inside the exchange rate.",
  },
  {
    icon: Users,
    title: "Community driven",
    text: "The roadmap is voted on by the people who actually use the product.",
  },
];

export default function DrivesSection() {
  return (
    <section className="container-page section">
      <div className="grid gap-6 md:grid-cols-12">
        <h2 className="heading-section md:col-span-6">
          What drives Finance Flow?
        </h2>
        <p className="text-body md:col-span-6 md:self-end">
          Four principles shape every decision we make about the product.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {features.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10 transition-colors hover:ring-white/25 md:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue text-white ring-1 ring-white/20">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>

            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

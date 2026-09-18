import Glow from "@/app/_components/Glow";
import PageHeader from "@/app/_components/PageHeader";

const stats = [
  { value: "2014", label: "Founded" },
  { value: "1M+", label: "Funded accounts" },
  { value: "140", label: "Countries served" },
  { value: "24/7", label: "Human support" },
];

const Section1 = () => {
  return (
    <section className="relative isolate">
      <Glow className="-left-[15vw] top-0 h-[min(950px,130vw)] w-[min(950px,130vw)]" />

      <div className="container-page py-16 md:py-24">
        <PageHeader
          align="center"
          title="About Finance Flow"
          description="We are building the simplest way to buy, trade and hold crypto, for people who would rather spend their time on everything else."
        />

        <dl className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-3xl bg-surface-2/40 p-6 text-center ring-1 ring-white/10 transition-colors hover:ring-white/25"
            >
              <dt className="text-2xl font-bold sm:text-3xl">{value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-white/50">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Section1;

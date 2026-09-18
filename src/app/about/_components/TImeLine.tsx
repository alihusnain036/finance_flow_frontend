const timelineData = [
  {
    year: "2014",
    title: "Founded",
    description:
      "Four engineers started building a crypto exchange that their families could actually use.",
  },
  {
    year: "2016",
    title: "Mobile launch",
    description:
      "The iOS and Android apps shipped, bringing full trading to phones for the first time.",
  },
  {
    year: "2018",
    title: "Global expansion",
    description:
      "Local payment methods opened FinanceFlow up to customers in 140 countries.",
  },
  {
    year: "2022",
    title: "One million customers",
    description:
      "The platform passed a million funded accounts while keeping fees the lowest in the market.",
  },
];

const Timeline = () => {
  return (
    <section className="container-page section grid gap-12 lg:grid-cols-3">
      <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:h-fit">
        <h2 className="heading-section">Timeline</h2>
        <p className="text-body">
          A short history of how FinanceFlow grew from a side project into a
          platform used around the world.
        </p>
      </div>

      {/* The rail runs behind the markers and stops at the last one. */}
      <ol className="relative flex flex-col gap-6 pl-8 lg:col-span-2">
        <span
          aria-hidden="true"
          className="absolute bottom-10 left-[7px] top-4 w-px bg-gradient-to-b from-blue via-white/20 to-transparent"
        />

        {timelineData.map((item) => (
          <li key={item.year} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-8 top-6 grid h-4 w-4 place-items-center rounded-full bg-blue ring-4 ring-background"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>

            <div className="rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10 transition-colors hover:ring-white/25">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue/15 px-3 py-1 text-xs font-semibold tracking-widest text-blue-300 ring-1 ring-blue/30">
                  {item.year}
                </span>
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;

import Image from "next/image";
import planet from "@/assets/images/planet.png";
import Glow from "@/app/_components/Glow";

const blocks = [
  {
    title: "Our Mission",
    paragraphs: [
      "To make owning crypto as ordinary as owning shares: clear pricing, plain language, and tools that do not assume you trade for a living.",
      "We measure success by how quickly a new customer can go from signing up to holding their first coin with confidence.",
    ],
  },
  {
    title: "Our Story",
    paragraphs: [
      "FinanceFlow started in 2014 when a handful of engineers got tired of exchanges that felt like flight simulators.",
      "Today the same team supports millions of customers across 140 countries, and still answers support tickets every week.",
    ],
  },
];

const OurMission = () => {
  return (
    <section className="relative isolate">
      <Glow className="right-0 top-10 h-[min(700px,110vw)] w-[min(700px,110vw)]" />

      <div className="container-page section grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          {blocks.map((block, index) => (
            <div
              key={block.title}
              className="flex flex-col gap-4 rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10 transition-colors hover:ring-white/25 md:p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                0{index + 1}
              </span>
              <h2 className="heading-section">{block.title}</h2>
              {block.paragraphs.map((text, i) => (
                <p key={i} className="text-body">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={planet}
            alt="Global network illustration"
            className="h-auto w-full max-w-[420px] object-contain drop-shadow-[0_25px_60px_rgba(3,40,238,0.45)] lg:max-w-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import featuredCover from "@/assets/images/blog/cover-3.png";
import Glow from "@/app/_components/Glow";
import PageHeader from "@/app/_components/PageHeader";

export default function BlogFeatureSection() {
  return (
    <section className="relative isolate">
      <Glow className="-left-[10vw] -top-[20vh] h-[min(900px,120vw)] w-[min(900px,120vw)]" />

      <div className="container-page section">
        <PageHeader
          className="mb-10"
          title="Blog"
          description="Guides, product updates and market explainers from the FinanceFlow team."
        />

        <article className="group grid overflow-hidden rounded-3xl bg-surface-2/40 ring-1 ring-white/10 transition-colors hover:ring-white/25 md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center gap-5 p-6 md:order-1 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
                Featured
              </span>
              <span className="text-xs uppercase tracking-widest text-white/50">
                8 min read
              </span>
            </div>

            <h2 className="max-w-md text-xl font-bold leading-snug md:text-3xl">
              Cryptocurrency Explained With Pros and Cons for Investment
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/70">
              What crypto is good at, what it is bad at, and the questions worth
              asking before you buy any.
            </p>

            <div className="flex items-center gap-3 border-t border-white/10 pt-5">
              <Image
                src="https://i.pravatar.cc/80?img=13"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide">
                  John Carter
                </p>
                <p className="text-xs text-white/50">August 30, 2021</p>
              </div>

              <span className="ml-auto inline-flex items-center gap-2 text-sm text-white/70 transition-colors group-hover:text-blue-300">
                Read article
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <Image
              src={featuredCover}
              alt=""
              priority
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64 md:h-full"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-surface/80 to-transparent md:bg-linear-to-r md:from-surface md:via-surface/20 md:to-transparent"
            />
          </div>
        </article>
      </div>
    </section>
  );
}

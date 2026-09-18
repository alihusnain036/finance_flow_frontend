import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "@/app/_components/Button";
import cover1 from "@/assets/images/blog/cover-1.png";
import cover2 from "@/assets/images/blog/cover-2.png";
import cover4 from "@/assets/images/blog/cover-4.png";

const posts = [
  {
    image: cover1,
    tag: "Tutorial",
    title: "The Basics about Cryptocurrency",
    description:
      "A plain-English introduction to how coins, wallets and exchanges actually fit together.",
    author: "Alex Turner",
    date: "August 2, 2021",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    image: cover2,
    tag: "Tutorial",
    title: "How to read a candlestick chart",
    description:
      "Open, high, low and close: what each candle tells you, and what it does not.",
    author: "Sophie Moore",
    date: "August 9, 2021",
    avatar: "https://i.pravatar.cc/80?img=45",
  },
  {
    image: cover4,
    tag: "Apps",
    title: "What's new in the mobile app",
    description:
      "Home screen widgets, Face ID sign-in and a redesigned portfolio tab.",
    author: "Marcus Bell",
    date: "August 23, 2021",
    avatar: "https://i.pravatar.cc/80?img=52",
  },
];

const AllArticals = () => {
  return (
    <section className="container-page section">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="heading-section">Browse our latest news</h2>
        <p className="text-body max-w-md">
          Guides, product updates and market explainers from the FinanceFlow
          team.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={index}
            className="group flex flex-col overflow-hidden rounded-3xl bg-surface-2/40 shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-white/25"
          >
            <div className="relative overflow-hidden">
              <Image
                src={post.image}
                alt=""
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-surface via-surface/20 to-transparent"
              />

              <span className="absolute left-4 top-4 rounded-full bg-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white shadow-lg">
                {post.tag}
              </span>
            </div>

            <div className="flex grow flex-col p-5">
              <h3 className="mb-2 flex items-start justify-between gap-3 text-base font-semibold leading-snug">
                {post.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
                />
              </h3>

              <p className="mb-5 grow text-[14px] text-white/70">
                {post.description}
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
                <Image
                  src={post.avatar}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide">
                    {post.author}
                  </p>
                  <p className="text-[12px] text-white/50">{post.date}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button content="View All Articles" urlPath="/blog" />
      </div>
    </section>
  );
};

export default AllArticals;

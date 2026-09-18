import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

type PostProps = {
  image: StaticImageData;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  avatar: string;
};

export default function PostCard(props: PostProps) {
  const { image, title, description, category, author, date, avatar } = props;

  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-3xl bg-surface-2/40 shadow-md ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-white/25">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt=""
          width={400}
          height={200}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-surface via-surface/20 to-transparent"
        />

        <span className="absolute left-4 top-4 rounded-full bg-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white shadow-lg">
          {category}
        </span>
      </div>

      <div className="flex grow flex-col p-5">
        <h3 className="mb-2 flex items-start justify-between gap-3 text-base font-semibold text-white">
          {title}
          <ArrowUpRight
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
          />
        </h3>

        <p className="mb-5 grow text-[13px] leading-relaxed text-white/70">
          {description}
        </p>

        <div className="flex items-center gap-3 border-t border-white/10 pt-4">
          <Image
            src={avatar}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide">
              {author}
            </p>
            <p className="text-xs text-white/50">{date}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

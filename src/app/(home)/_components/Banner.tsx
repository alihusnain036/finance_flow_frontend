import Image from "next/image";
import bannerPic from "@/assets/images/60e4a1e7380756458de7fb94_logo-company-1-crypto-template.svg.png";

const Banner = () => {
  return (
    <section className="container-page section-tight text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
        Finance Flow has been featured on
      </p>

      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i}>
            <Image
              src={bannerPic}
              alt="Featured company logo"
              className="h-auto w-28 opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:w-32"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Banner;

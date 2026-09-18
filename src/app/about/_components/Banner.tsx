import Image from "next/image";
import bannerPic from "@/assets/images/60e4a1e7380756458de7fb94_logo-company-1-crypto-template.svg.png";

const Banner = () => {
  return (
    <section className="container-page section-tight flex flex-col items-center gap-8">
      <div className="max-w-2xl text-center">
        <h2 className="mb-2 text-2xl font-bold sm:text-3xl">Investors</h2>
        <p className="text-body">
          FinanceFlow is backed by funds and operators who have built financial
          infrastructure before.
        </p>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i}>
            <Image
              src={bannerPic}
              alt="Investor logo"
              className="h-auto w-28 object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:w-32"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Banner;

import Image from "next/image";
import Button from "@/app/_components/Button";
import pairShot from "@/assets/images/app/app-pair-trading.png";

const ExploreSection = () => {
  return (
    <section className="mt-16 overflow-hidden bg-blue md:mt-24">
      <div className="container-page flex flex-col items-center gap-8 pt-12 lg:flex-row lg:justify-between lg:gap-12 lg:pt-0">
        <div className="flex max-w-xl flex-col items-start gap-4 py-0 text-left lg:py-16">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Explore endless possibilities with FinanceFlow
          </h2>
          <p className="max-w-md text-sm text-white/80">
            Join millions of people already trading on the fastest growing
            crypto platform.
          </p>
          <div className="mt-2 w-full sm:w-auto">
            <Button content="Download App" />
          </div>
        </div>

        <div className="flex w-full justify-center self-end lg:w-auto">
          <Image
            src={pairShot}
            alt="FinanceFlow app on two phones"
            className="-mb-12 h-auto w-full max-w-[340px] object-contain md:max-w-[420px] lg:max-w-[460px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;

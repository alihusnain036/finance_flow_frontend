import { Metadata } from "next";
import Button from "./_components/Button";
import Glow from "./_components/Glow";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="relative isolate">
      <Glow className="left-1/2 top-10 h-[min(950px,130vw)] w-[min(950px,130vw)] -translate-x-1/2" />

      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-[96px] font-extrabold leading-none tracking-tight text-blue sm:text-[120px] md:text-[160px]">
          404
        </p>

        <h1 className="mt-4 text-2xl font-semibold md:text-3xl">
          Page Not Found
        </h1>
        <p className="text-body mt-3 max-w-[560px]">
          The page you&rsquo;re looking for can&rsquo;t be found. Double-check
          the URL and try again, or use one of the links below.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button content="View Pricing" isBlue urlPath="/pricing" />
          <Button content="Go Home" urlPath="/" />
        </div>
      </div>
    </section>
  );
}

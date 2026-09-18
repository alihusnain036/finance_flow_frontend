import Image from "next/image";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";
import iosShot from "@/assets/images/app/app-ios.png";
import androidShot from "@/assets/images/app/app-android.png";
import desktopShot from "@/assets/images/app/app-desktop.png";

const mobile = [
  {
    name: "iOS",
    icon: FaApple,
    cta: "App Store",
    text: "Built for iPhone and iPad, with Face ID sign-in and home screen widgets.",
    image: iosShot,
  },
  {
    name: "Android",
    icon: FaGooglePlay,
    cta: "Play Store",
    text: "Runs on any device with Android 9 or newer, including tablets and foldables.",
    image: androidShot,
  },
];

const DownloadDetails = () => {
  return (
    <section className="container-page section">
      <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
        <h2 className="heading-section">Download our app</h2>
        <p className="text-body max-w-md">
          Take your portfolio everywhere. One account works across every
          platform.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {mobile.map(({ name, icon: Icon, cta, text, image }) => (
          <article
            key={name}
            className="flex flex-col overflow-hidden rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10 transition-colors hover:ring-white/25 md:p-8"
          >
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue text-xl text-white ring-1 ring-white/20">
              <Icon />
            </span>

            <h3 className="mb-2 text-xl font-semibold">Download for {name}</h3>
            <p className="mb-6 max-w-sm text-sm text-white/70">{text}</p>

            <a
              href="#"
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium ring-1 ring-white/15 transition hover:bg-white hover:text-blue"
            >
              {cta.toUpperCase()}
            </a>

            <Image
              src={image}
              alt={`FinanceFlow on ${name}`}
              className="-mb-24 mt-auto h-auto w-full max-w-[230px] self-center object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </article>
        ))}

        <article className="grid gap-8 overflow-hidden rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10 transition-colors hover:ring-white/25 sm:col-span-2 md:grid-cols-2 md:items-center md:p-8">
          <div>
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue text-xl text-white ring-1 ring-white/20">
              <FaWindows />
            </span>

            <h3 className="mb-2 text-xl font-semibold">Download for Desktop</h3>
            <p className="mb-6 max-w-md text-sm text-white/70">
              A full trading terminal for Windows and macOS, with multi-chart
              layouts, keyboard order entry and a live order book.
            </p>
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium ring-1 ring-white/15 transition hover:bg-white hover:text-blue"
            >
              DOWNLOAD
            </a>
          </div>

          <Image
            src={desktopShot}
            alt="FinanceFlow desktop terminal"
            className="h-auto w-full rounded-lg object-contain md:-mr-10 lg:-mr-16"
          />
        </article>
      </div>
    </section>
  );
};

export default DownloadDetails;

import Image from "next/image";
import { Activity, EyeOff, Headphones } from "lucide-react";
import Glow from "@/app/_components/Glow";
import androidShot from "@/assets/images/app/app-android.png";

const points = [
  { icon: EyeOff, text: "100% Private data" },
  { icon: Activity, text: "99.99% Uptime guarantee" },
  { icon: Headphones, text: "24/7 Dedicated support" },
];

const RewardSection2 = () => {
  return (
    <section className="relative isolate">
      <Glow className="-left-[15vw] top-0 h-[min(600px,110vw)] w-[min(900px,130vw)]" />

      <div className="container-page section grid items-center gap-12 lg:grid-cols-2">
        <div className="flex max-w-xl flex-col items-start gap-6 lg:order-1">
          <h2 className="heading-section">
            Private, reliable and always supported
          </h2>

          <p className="text-body max-w-md">
            Your data stays yours, the platform stays up, and a real person is
            available whenever you need one.
          </p>

          <ul className="flex flex-col gap-4">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-blue">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:order-2 lg:justify-end">
          <Image
            src={androidShot}
            alt="Trading view in the FinanceFlow app"
            className="h-auto w-full max-w-[260px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)] md:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default RewardSection2;

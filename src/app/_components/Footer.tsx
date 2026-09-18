import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import logo from "@/assets/images/logo.png";
import { navLinks } from "./navLinks";

const socials = [
  { label: "Instagram", icon: FaInstagram },
  { label: "Facebook", icon: FaFacebookF },
  { label: "LinkedIn", icon: FaLinkedinIn },
];

const stores = [
  { label: "App Store", icon: FaApple },
  { label: "Play Store", icon: FaGooglePlay },
];

const resources = [
  { label: "Help centre", href: "/contact_us" },
  { label: "Fees", href: "/pricing" },
  { label: "Supported tokens", href: "/tokens" },
  { label: "Status", href: "#" },
];

const legal = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Cookies", href: "#" },
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-surface/80">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-5 lg:col-span-4">
            <Link href="/" aria-label="FinanceFlow home">
              <Image
                src={logo}
                alt="FinanceFlow"
                width={150}
                height={30}
                className="h-auto w-[150px]"
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Buy, trade and hold 350+ cryptocurrencies, with fees published up
              front and support from real people.
            </p>

            <ul className="flex gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition hover:bg-white hover:text-blue"
                  >
                    <Icon className="text-sm" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <nav className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Menu
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Resources
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* App download */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10">
              <h5 className="text-sm font-semibold uppercase tracking-widest text-white/60">
                Get the app
              </h5>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Trade, track and grow your portfolio from your phone.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                {stores.map(({ label, icon: Icon }) => (
                  <a
                    key={label}
                    href="#"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-medium transition hover:bg-[#031FB4]"
                  >
                    <Icon className="text-lg" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} FinanceFlow. All rights reserved.
          </p>

          <ul className="flex flex-wrap gap-6">
            {legal.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

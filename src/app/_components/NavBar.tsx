"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";
import Button from "./Button";
import { navLinks } from "./navLinks";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  /* Transparent over the hero, solid once the page moves. */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasBackdrop = isScrolled || isMenuOpen;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        hasBackdrop
          ? "border-b border-white/10 bg-background/80 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-6 xl:gap-10">
          <Link href="/" aria-label="FinanceFlow home" className="shrink-0">
            <Image
              src={logo}
              alt="FinanceFlow"
              width={150}
              height={30}
              priority
              className="h-auto w-[130px] sm:w-[150px]"
            />
          </Link>

          <span className="hidden lg:block h-10 w-px bg-white/15" />

          {/* Full nav needs ~900px of room, so it appears at lg, not md. */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative block whitespace-nowrap py-1 transition-colors
                      after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-white
                      after:transition-all after:duration-300
                      ${isActive ? "after:w-full" : "text-white/80 hover:text-white after:w-0 hover:after:w-full"}`}
                  >
                    {label.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden lg:block">
          <Button content="Download App" isBlue />
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden grid h-11 w-11 place-items-center rounded-lg text-white transition-colors hover:bg-white/10"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 pb-6 pt-2">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-white/10 font-semibold text-white"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label.toUpperCase()}
                </Link>
              </li>
            );
          })}
          <li className="mt-3 px-1">
            <Button content="Download App" isBlue fullWidth />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;

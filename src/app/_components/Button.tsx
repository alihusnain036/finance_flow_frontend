"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  content: string;
  isBlue?: boolean;
  urlPath?: string;
  /** Stay full width at every breakpoint (mobile menu, cards). */
  fullWidth?: boolean;
  className?: string;
};

const Button = ({
  content,
  isBlue,
  urlPath,
  fullWidth,
  className = "",
}: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => urlPath && router.push(urlPath)}
      className={`inline-flex h-11 shrink-0 items-center justify-center rounded-full px-7
        text-sm font-semibold tracking-wide transition-colors cursor-pointer
        ${fullWidth ? "w-full" : "w-full sm:w-auto"}
        ${
          isBlue
            ? "bg-blue text-white hover:bg-[#031FB4]"
            : "bg-white/10 text-white hover:bg-white hover:text-blue"
        } ${className}`}
    >
      {content.toLocaleUpperCase()}
    </button>
  );
};

export default Button;

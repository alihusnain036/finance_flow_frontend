import { FiMail } from "react-icons/fi";

export default function NewsletterBanner() {
  return (
    <section className="bg-blue py-10 md:py-12">
      <div className="container-page flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white/20 text-lg text-white">
            <FiMail />
          </span>
          <h2 className="max-w-md text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">
            Subscribe to our crypto news weekly newsletter!
          </h2>
        </div>

        <form className="flex w-full max-w-md items-center gap-2 rounded-full bg-white p-1.5">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter email address"
            className="min-w-0 grow bg-transparent px-4 py-2.5 text-sm text-black outline-none"
          />
          <button
            type="submit"
            className="shrink-0 cursor-pointer rounded-full bg-blue px-5 py-2.5 text-sm font-semibold tracking-widest text-white transition hover:bg-[#031FB4]"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

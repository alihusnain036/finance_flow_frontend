"use client";

import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Glow from "@/app/_components/Glow";
import PageHeader from "@/app/_components/PageHeader";

const emails = [
  { address: "contact@example.com", label: "General enquiries" },
  { address: "support@example.com", label: "Account & trading help" },
  { address: "press@example.com", label: "Press & partnerships" },
];

const socials = [
  { label: "Instagram", icon: FaInstagram },
  { label: "Facebook", icon: FaFacebookF },
  { label: "LinkedIn", icon: FaLinkedinIn },
];

const fieldClass =
  "h-12 w-full rounded-xl border border-white/10 bg-dark-blue/70 px-4 text-sm text-white " +
  "placeholder:text-white/40 transition-colors outline-none " +
  "focus:border-blue focus:ring-2 focus:ring-blue/40";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-widest text-white/50";

export default function ContactSection() {
  return (
    <section className="relative isolate">
      <Glow className="left-[10vw] -top-[20vh] h-[min(950px,130vw)] w-[min(950px,130vw)]" />

      <div className="container-page section">
        <PageHeader
          title="Get in touch"
          description="Questions about your account, our pricing or a partnership? Send us a message and a real person will get back to you."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <form className="flex h-fit flex-col gap-5 rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10 md:p-8 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full name
                </label>
                <input id="name" name="name" placeholder="Jane Cooper" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  placeholder="Optional"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="subject" className={labelClass}>
                  How can we help?
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="Choose a topic"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us a little about what you need."
                className="w-full resize-y rounded-2xl border border-white/10 bg-dark-blue/70 p-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/40"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-blue px-8 text-sm font-semibold text-white transition-colors hover:bg-[#031FB4] sm:w-auto"
              >
                Send Message
              </button>
              <p className="text-xs text-white/50">
                We reply to every message within one working day.
              </p>
            </div>
          </form>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10">
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/60">
                <Mail className="h-4 w-4 text-blue-400" />
                Email us
              </h2>
              <ul className="mt-4 space-y-3">
                {emails.map(({ address, label }) => (
                  <li key={address}>
                    <a
                      href={`mailto:${address}`}
                      className="group block rounded-xl px-3 py-2 transition-colors hover:bg-white/5"
                    >
                      <span className="block break-all text-sm text-white transition-colors group-hover:text-blue-300">
                        {address}
                      </span>
                      <span className="text-xs text-white/50">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/60">
                  <MessageCircle className="h-4 w-4 text-blue-400" />
                  Live chat
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Available in the app, 24 hours a day.
                </p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-green-500/20">
                  <Clock className="h-3.5 w-3.5" />
                  Typical reply under 5 minutes
                </p>
              </div>

              <div className="rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/60">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  Visit us
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  8 Finsbury Circus
                  <br />
                  London, EC2M 7EA
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-surface-2/40 p-6 ring-1 ring-white/10">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
                Follow us
              </h2>
              <ul className="mt-4 flex gap-3">
                {socials.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href="#"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-blue"
                    >
                      <Icon className="text-sm" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

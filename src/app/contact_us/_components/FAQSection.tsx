"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faqData = [
  {
    id: "q1",
    question: "What is cryptocurrency?",
    answer:
      "Cryptocurrency is a digital currency that uses blockchain technology and cryptography to secure transactions.",
  },
  {
    id: "q2",
    question: "How do I start trading crypto?",
    answer:
      "Create an account, verify your identity, add funds with a card or bank transfer, and place your first order. The whole process usually takes under ten minutes.",
  },
  {
    id: "q3",
    question: "Is it safe to invest in crypto?",
    answer:
      "Crypto prices move sharply, so only invest what you can afford to lose. We secure your holdings with 256-bit encryption, cold storage and optional hardware key sign-in.",
  },
  {
    id: "q4",
    question: "Can I use crypto like money?",
    answer:
      "Yes, in many places. Businesses, platforms, and even charities now accept crypto, and you can spend directly from your FinanceFlow balance.",
  },
  {
    id: "q5",
    question: "What’s a blockchain?",
    answer:
      "A blockchain is a distributed ledger that records transactions securely, transparently, and immutably.",
  },
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="container-page section">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="heading-section">Frequently asked questions</h2>
          <p className="text-body mx-auto mt-3 max-w-lg">
            Can&rsquo;t find what you need? Email us and we will add it to this
            list.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          value={openItem || ""}
          onValueChange={(val) => setOpenItem(val || null)}
          className="flex flex-col gap-3"
        >
          {faqData.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={`overflow-hidden rounded-2xl border-0 bg-surface-2/40 px-5 ring-1 transition-colors md:px-6 ${
                  isOpen ? "ring-blue/50" : "ring-white/10 hover:ring-white/25"
                }`}
              >
                <AccordionTrigger className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium hover:no-underline [&>svg]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-lg font-light transition-colors ${
                      isOpen ? "bg-blue text-white" : "bg-white/10 text-white"
                    }`}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-5 pr-12 text-sm leading-relaxed text-white/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

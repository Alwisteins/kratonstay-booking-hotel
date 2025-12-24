"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/themes";

const faqs = [
  {
    question: "Is the hotel near Malioboro Street?",
    answer:
      "Yes, the hotel is located just a few minutes away from Malioboro Street, making it easy to explore shopping and local attractions.",
  },
  {
    question: "Does the hotel provide free parking?",
    answer: "Yes, we provide free parking facilities for all hotel guests.",
  },
  {
    question: "Is early check-in available?",
    answer: "Early check-in is subject to room availability and may incur an additional charge.",
  },
  {
    question: "Is the hotel suitable for families?",
    answer:
      "Absolutely. Our hotel offers family-friendly rooms and amenities suitable for guests traveling with children.",
  },
  {
    question: "How far is the hotel from YIA International Airport?",
    answer: "The hotel is approximately 60 minutes away from YIA International Airport by car.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#FAFAF7] py-20">
      <div className="mx-auto max-w-3xl px-6 sm:px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1F3D2B] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">Common questions about our hotel in Yogyakarta.</p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-2">
          {faqs.map((item, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left text-base font-medium text-[#1F3D2B] transition hover:text-[#14532D]">
                  {item.question}
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="pb-4 text-sm text-gray-600 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

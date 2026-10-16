"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What are your check-in and check-out times?",
    answer:
      "Standard check-in begins at 2:00 PM, and check-out is by 11:00 AM. Early arrivals and late departures may be accommodated based on seasonal availability and can be coordinated in advance with our concierge team.",
  },
  {
    id: "faq-2",
    question: "What identification documents are required at arrival?",
    answer:
      "In accordance with local regulations, all adult guests must present a valid government-issued photo ID upon check-in (Aadhaar, Passport, Voter ID, or Driving License). For international guests, a valid passport and Indian tourist visa are mandatory.",
  },
  {
    id: "faq-3",
    question: "What is your reservation cancellation and amendment policy?",
    answer:
      "For standard bookings, cancellations made up to 7 days prior to your scheduled arrival date will receive a 100% refund. Cancellations made within 7 days of arrival will incur a fee equivalent to one night's stay. Non-refundable promotional rates are clearly marked during booking.",
  },
  {
    id: "faq-4",
    question: "Is estate parking and EV charging available?",
    answer:
      "Yes. We provide complimentary secure covered parking with round-the-clock security and valet assistance. We also offer dual-port 22kW Type-2 EV charging stations available complimentary to all resident guests.",
  },
  {
    id: "faq-5",
    question: "What is included with our direct booking breakfast?",
    answer:
      "All direct bookings include our daily farm-to-table breakfast served on the Veranda, featuring fresh seasonal juices, artisanal sourdoughs, local Kodava delicacies, free-range eggs, and fresh single-origin estate coffee roasted on the property.",
  },
  {
    id: "faq-6",
    question: "What is your policy regarding children and extra beds?",
    answer:
      "Children of all ages are welcome. Children aged 5 and under stay free of charge using existing bedding. For older children or additional adults, extra beds can be arranged in our Premium Heritage Suites and Presidential Sanctuary for a nominal supplement.",
  },
  {
    id: "faq-7",
    question: "Are pets allowed on the property?",
    answer:
      "To safeguard the delicate local bird and wildlife ecosystem within our 40-acre rainforest perimeter, pets are unfortunately not permitted. Certified service animals with prior documentation are graciously welcomed.",
  },
  {
    id: "faq-8",
    question: "Which payment methods are accepted?",
    answer:
      "We accept all major credit and debit cards (Visa, MasterCard, American Express, RuPay), UPI, Net Banking, and direct electronic bank wire transfers. We do not accept personal cheques.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState("faq-1");

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            Clear Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292B27] font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#73766E] font-light mt-3">
            Helpful information regarding reservations, arrivals, and estate policies.
          </p>
        </div>

        <div className="divide-y divide-[#E7E4DC] border-t border-b border-[#E7E4DC]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none focus:ring-1 focus:ring-[#78866B] rounded p-1"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#292B27] group-hover:text-[#414C38] transition-colors font-medium">
                    {item.question}
                  </span>
                  <span className="w-8 h-8 rounded-none border border-[#E7E4DC] flex items-center justify-center shrink-0 text-[#78866B] group-hover:border-[#414C38] group-hover:text-[#414C38] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-xs sm:text-sm text-[#73766E] font-light leading-relaxed pr-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center p-6 bg-[#F8F6F0] border border-[#E7E4DC]">
          <p className="text-xs text-[#73766E]">
            Have an enquiry not addressed here? Contact our reservations desk directly at{" "}
            <a
              href="mailto:reservations@theverdanthaven.com"
              className="text-[#414C38] font-medium underline hover:text-[#292B27]"
            >
              reservations@theverdanthaven.com
            </a>{" "}
            or call{" "}
            <a href="tel:+918272234500" className="text-[#414C38] font-medium underline">
              +91 8272 234 500
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

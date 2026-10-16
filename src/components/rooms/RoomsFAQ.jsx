"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ROOMS_FAQS } from "@/data/roomsData";

export default function RoomsFAQ() {
  const [openId, setOpenId] = useState("rf-1");

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            Accommodation Policies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292B27] font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#73766E] font-light mt-2">
            Essential guidelines regarding suite reservations, occupancy, and check-in procedures.
          </p>
        </div>

        <div className="divide-y divide-[#E7E4DC] border-t border-b border-[#E7E4DC]">
          {ROOMS_FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`room-faq-${item.id}`}
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
                      id={`room-faq-${item.id}`}
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
      </div>
    </section>
  );
}

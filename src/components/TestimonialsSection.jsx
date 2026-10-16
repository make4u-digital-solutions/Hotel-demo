"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The Verdant Haven is a rare sanctuary where time seems to slow to an exquisite halt. The cedar scent in the suite, the mist rolling across the coffee blossoms at dawn, and the discreet kindness of the staff made this our most restorative stay in years.",
    author: "Rohan & Meera Singhania",
    location: "Bengaluru, India",
    stayType: "Presidential Sanctuary • Verified Guest Stay",
    rating: 5,
  },
  {
    quote:
      "As an architect, I am captivated by how thoughtfully the stone villas dialogue with the 40-acre rainforest. No loud music, no neon signs—just absolute silence, acoustic perfection, and the purest estate coffee brewed fresh to order.",
    author: "Elena Rostova",
    location: "Zurich, Switzerland",
    stayType: "Heritage Suite • Architectural Travel Review",
    rating: 5,
  },
  {
    quote:
      "The private plantation breakfast and the bespoke Ayurvedic treatments exceeded every luxury resort expectation. You feel not like a room number, but a cherished personal guest in a private country estate.",
    author: "Aditya & Priyamvada K.",
    location: "Mumbai, India",
    stayType: "Deluxe Garden Room • Verified Direct Stay",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F8F6F0] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            Guest Reflections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292B27] font-normal">
            Moments That Linger
          </h2>
          <p className="text-xs text-[#73766E] mt-2 italic">
            Curated sample feedback representing our hospitality commitments.
          </p>
        </div>

        <div className="relative bg-[#FFFFFF] border border-[#E7E4DC] p-8 sm:p-14 lg:p-16 shadow-lg shadow-[#292B27]/5">
          <Quote className="w-10 h-10 text-[#E9E2D5] mb-6" />

          {/* Testimonial Content with AnimatePresence */}
          <div className="min-h-[160px] sm:min-h-[140px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="font-serif text-xl sm:text-2xl text-[#292B27] leading-relaxed italic">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E7E4DC]">
                  <div>
                    <h4 className="font-serif text-lg text-[#292B27] font-medium">
                      {TESTIMONIALS[current].author}
                    </h4>
                    <p className="text-xs text-[#73766E] font-light">
                      {TESTIMONIALS[current].location} • {TESTIMONIALS[current].stayType}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-[#A7895C]" aria-label="5 out of 5 stars">
                    {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E7E4DC]/60">
            <span className="text-xs tracking-widest text-[#73766E] uppercase font-mono">
              0{current + 1} / 0{TESTIMONIALS.length}
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-none border border-[#E7E4DC] hover:border-[#414C38] hover:bg-[#F8F6F0] text-[#292B27] transition-colors focus:outline-none focus:ring-1 focus:ring-[#78866B]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="p-2.5 rounded-none border border-[#E7E4DC] hover:border-[#414C38] hover:bg-[#F8F6F0] text-[#292B27] transition-colors focus:outline-none focus:ring-1 focus:ring-[#78866B]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

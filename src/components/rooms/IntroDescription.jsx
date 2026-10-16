"use client";

import { motion } from "framer-motion";

export default function IntroDescription() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F6F0] border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#78866B] font-semibold block mb-2">
              Bespoke Accommodation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292B27] font-normal leading-tight">
              Find the Space <br />
              <span className="italic font-light text-[#78866B]">That Feels Like Yours.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#73766E] font-light leading-relaxed">
            <p>
              Whether you seek an intimate bedroom facing fragrant coffee groves, a spacious heritage suite with a wood-burning stone hearth, or our signature presidential villa with a private heated plunge pool, each room at The Verdant Haven is built with acoustic seclusion and quiet reverence for nature.
            </p>
            <p>
              Every space is appointed with organic cotton textiles, handmade botanical bath oils, and private verandas positioned to capture the dawn mist drifting across the Western Ghats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

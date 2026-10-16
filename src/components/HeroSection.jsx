"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Compass } from "lucide-react";

export default function HeroSection({ onOpenBooking }) {
  return (
    <section id="home" className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=85"
          alt="The Verdant Haven boutique hotel architecture nestled in tranquil mountain gardens"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial warm dual-layer gradient: keeps overall site light while assuring text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#292B27]/75 via-[#292B27]/40 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-[#F8F6F0]/20" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#F8F6F0] to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl text-left">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#E7E4DC] mb-6 text-xs tracking-[0.2em] uppercase text-[#414C38] font-medium shadow-xs"
          >
            <MapPin className="w-3.5 h-3.5 text-[#78866B]" />
            <span>Coorg Highlands, Western Ghats • 3,800 FT</span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-xs sm:text-sm tracking-[0.28em] uppercase text-[#E9E2D5] font-semibold mb-3"
          >
            A More Considered Way to Stay
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#FFFFFF] font-normal leading-[1.08] tracking-tight mb-6 drop-shadow-xs"
          >
            Where Every Stay <br className="hidden sm:inline" />
            <span className="italic font-light text-[#E9E2D5]">Becomes a Story.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg text-[#F8F6F0]/90 font-light leading-relaxed mb-8 max-w-xl"
          >
            Set amidst forty acres of private coffee plantations and mist-covered hills. 
            An intimate retreat designed for slow living, thoughtful hospitality, and quiet elegance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#414C38] hover:bg-[#323B2B] text-white text-xs sm:text-sm uppercase tracking-[0.16em] font-medium transition-all shadow-md active:scale-[0.98] border border-[#414C38]"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4 text-[#E9E2D5]" />
            </button>

            <a
              href="#rooms"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#292B27] text-xs sm:text-sm uppercase tracking-[0.16em] font-medium transition-all border border-[#E7E4DC] backdrop-blur-xs"
            >
              <Compass className="w-4 h-4 text-[#78866B]" />
              <span>Explore Our Rooms</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Discreet Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-[#73766E]"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#73766E]/80">Scroll to Explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#78866B] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}

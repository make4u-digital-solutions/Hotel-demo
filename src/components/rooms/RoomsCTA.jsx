"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, Phone } from "lucide-react";

export default function RoomsCTA({ onOpenBooking }) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#414C38] text-white overflow-hidden">
      {/* Background with warm ambient photo */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85"
          alt="Atmospheric suite interior"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#E9E2D5] font-semibold block mb-3">
            Reserve Your Haven
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Your Perfect Stay <br className="hidden sm:inline" />
            <span className="italic font-light text-[#E9E2D5]">Starts Here.</span>
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#F8F6F0]/85 font-light max-w-xl mx-auto leading-relaxed">
          Experience unhurried mornings, tranquil verandas overlooking mist-shrouded coffee hills, and intuitive hospitality crafted around your rhythm.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFFFFF] hover:bg-[#F8F6F0] text-[#292B27] text-xs uppercase tracking-[0.16em] font-medium transition-all shadow-lg active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 text-[#414C38]" />
            <span>Book Your Stay</span>
          </button>

          <a
            href="tel:+918272234500"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-[#FFFFFF] text-xs uppercase tracking-[0.16em] font-medium border border-white/40 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E9E2D5]" />
            <span>Speak with Concierge</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#E9E2D5]/80 font-light border-t border-white/15 max-w-xl mx-auto">
          <span>✓ Best Direct Rate Privilege</span>
          <span>✓ Flexible 7-Day Rescheduling</span>
          <span>✓ Complimentary Estate Breakfast</span>
        </div>
      </div>
    </section>
  );
}

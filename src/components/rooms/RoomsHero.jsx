"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

export default function RoomsHero() {
  return (
    <section className="relative pt-6 pb-16 sm:pb-24 bg-[#F8F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#73766E]">
            <li>
              <Link href="/" className="hover:text-[#414C38] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-[#78866B]" />
            </li>
            <li className="text-[#292B27] font-medium" aria-current="page">
              Rooms & Suites
            </li>
          </ol>
        </nav>

        {/* Editorial Header & Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#A7895C]" />
              <span>Your Private Retreat</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#292B27] font-normal leading-[1.08] tracking-tight">
              Rooms &amp; Suites
            </h1>

            <p className="text-base sm:text-lg text-[#73766E] font-light leading-relaxed max-w-xl pt-2">
              Thoughtfully designed spaces where comfort, calm, and considered details come together amidst forty secluded acres of highland sanctuary.
            </p>
          </div>

          {/* Quick Stat / Micro Highlight */}
          <div className="lg:col-span-6 flex sm:justify-end">
            <div className="flex items-center gap-6 sm:gap-8 border-l sm:border-l-0 sm:border-r border-[#E7E4DC] pl-4 sm:pl-0 sm:pr-6 text-xs text-[#73766E]">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#292B27] block">18</span>
                <span className="uppercase tracking-wider text-[10px]">Private Suites</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E7E4DC]" />
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#292B27] block">3,800 FT</span>
                <span className="uppercase tracking-wider text-[10px]">Highland Elevation</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E7E4DC]" />
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#292B27] block">100%</span>
                <span className="uppercase tracking-wider text-[10px]">Estate Garden Views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-10 sm:mt-12 relative aspect-[16/9] sm:aspect-[21/9] w-full border border-[#E7E4DC] overflow-hidden shadow-xl shadow-[#292B27]/5"
        >
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85"
            alt="Interior of Premium Heritage Suite at The Verdant Haven overlooking misty coffee plantation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292B27]/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white max-w-md">
            <span className="inline-block text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-xs px-2.5 py-0.5 border border-white/20 mb-1">
              Sanctuary Architecture
            </span>
            <p className="font-serif text-lg sm:text-xl font-normal drop-shadow-xs">
              Handcrafted teak furnishings and natural stonework dialoguing with the rainforest.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, SunMedium } from "lucide-react";

export default function WelcomeSection({ onOpenStory }) {
  const highlights = [
    {
      icon: Leaf,
      title: "Organic Plantation Heritage",
      desc: "Immersed in historic shade-grown coffee, pepper vines, and native flora.",
    },
    {
      icon: ShieldCheck,
      title: "Mindful Solitude",
      desc: "Only 18 bespoke suites across forty secluded acres for total privacy.",
    },
    {
      icon: SunMedium,
      title: "Bespoke Daily Rituals",
      desc: "From guided dawn bird walks to evening acoustic hearth gatherings.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#78866B] font-semibold">
                The Art of Hospitality
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292B27] font-normal leading-[1.18]">
                A Place to Slow Down <br />
                <span className="italic font-light text-[#78866B]">and Feel at Home.</span>
              </h2>
            </div>

            <p className="text-base text-[#73766E] leading-relaxed font-light">
              Founded on the belief that true luxury lies in quiet moments, unhurried time, and deep connection with the land. At The Verdant Haven, hospitality is never scripted—it is an attentive, heartfelt craft honed across generations.
            </p>

            <p className="text-base text-[#73766E] leading-relaxed font-light">
              Wake to birdsong echoing through ancient silver oak trees, breathe air scented with wild jasmine and morning mist, and let the gentle rhythm of highland living restore your sense of balance.
            </p>

            {/* Highlights list */}
            <div className="pt-4 border-t border-[#E7E4DC] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <item.icon className="w-5 h-5 text-[#78866B]" />
                  <h3 className="font-serif text-base text-[#292B27] font-medium">{item.title}</h3>
                  <p className="text-xs text-[#73766E] leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenStory}
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.16em] font-medium text-[#414C38] hover:text-[#292B27] transition-colors focus:outline-none"
              >
                <span>Discover Our Story</span>
                <span className="w-8 h-[1px] bg-[#414C38] group-hover:w-12 transition-all duration-300" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Editorial Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-lg mx-auto shadow-2xl shadow-[#292B27]/10 border border-[#E7E4DC] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85"
                alt="Veranda of The Verdant Haven overlooking lush private estate gardens"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#FFFFFF] border border-[#E7E4DC] p-5 shadow-lg max-w-[240px] hidden sm:block">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#78866B] font-semibold mb-1">
                Sanctuary Index
              </span>
              <p className="font-serif text-2xl text-[#292B27]">40 Acres</p>
              <p className="text-xs text-[#73766E] mt-1 font-light">Of protected coffee estates & biodiverse rainforest.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

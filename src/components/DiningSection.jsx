"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, UtensilsCrossed, Wine, Coffee, ArrowRight } from "lucide-react";

export default function DiningSection({ onOpenMenu }) {
  const mealHours = [
    { title: "Estate Breakfast", time: "7:00 AM – 10:30 AM", note: "Included with direct bookings" },
    { title: "Veranda Lunch & Dinner", time: "12:30 PM – 10:30 PM", note: "Regional & artisanal continental" },
    { title: "Sunset Plantation Tea", time: "4:30 PM – 6:00 PM", note: "Single-estate coffee & fresh bakes" },
  ];

  return (
    <section id="dining" className="py-24 sm:py-32 bg-[#F8F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (Images) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 grid grid-cols-12 gap-4"
          >
            <div className="col-span-8 relative aspect-[4/5] border border-[#E7E4DC] overflow-hidden shadow-xl shadow-[#292B27]/5">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
                alt="The Hearth & Table Restaurant dining room with warm ambient lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="col-span-4 flex flex-col gap-4">
              <div className="relative aspect-square border border-[#E7E4DC] overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85"
                  alt="Artisanal seasonal culinary plate served with estate herbs"
                  fill
                  sizes="(max-width: 1024px) 30vw, 20vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-[#FFFFFF] p-5 border border-[#E7E4DC] flex-1 flex flex-col justify-center">
                <Coffee className="w-5 h-5 text-[#78866B] mb-2" />
                <h4 className="font-serif text-base text-[#292B27]">Micro-Lot Coffee</h4>
                <p className="text-[11px] text-[#73766E] font-light mt-1">
                  Single-origin Arabica & Robusta roasted daily on property.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.26em] text-[#78866B] font-semibold block mb-2">
                Culinary Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292B27] font-normal leading-tight">
                Good Food. <br />
                <span className="italic font-light text-[#78866B]">Beautiful Moments.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#73766E] font-light leading-relaxed">
              At <strong className="font-medium text-[#292B27]">The Veranda & Hearth</strong>, our culinary team celebrates hyper-local highland produce. Ingredients travel mere steps from our organic raised beds, fruit orchards, and local dairy farms straight to our earthenware hearth ovens.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-[0.18em] text-[#292B27] font-semibold flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#78866B]" />
                <span>Service Hours</span>
              </h4>
              <div className="space-y-2">
                {mealHours.map((meal, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-[#E7E4DC] text-xs">
                    <div>
                      <span className="font-medium text-[#292B27]">{meal.title}</span>
                      <span className="block text-[11px] text-[#73766E] font-light">{meal.note}</span>
                    </div>
                    <span className="text-[#414C38] font-medium tracking-wide">{meal.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={onOpenMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#414C38] hover:bg-[#323B2B] text-white text-xs uppercase tracking-[0.16em] font-medium transition-colors border border-[#414C38]"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#E9E2D5]" />
                <span>View Sample Tasting Menu</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

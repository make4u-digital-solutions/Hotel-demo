"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wifi,
  Waves,
  Sparkles,
  BookOpen,
  Utensils,
  Car,
  BellRing,
  BatteryCharging,
} from "lucide-react";

export default function AmenitiesSection({ onOpenAmenitiesModal }) {
  const primaryAmenities = [
    {
      title: "Infinity Pool Overlooking Valley",
      description: "Temperature-controlled freshwater pool hovering on the mountain ridge.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
      badge: "Open Daily 6 AM – 8 PM",
    },
    {
      title: "Ayurvedic Spa & Herbal Steam",
      description: "Traditional therapies using freshly harvested therapeutic oils and mountain herbs.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
      badge: "Holistic Wellness",
    },
  ];

  const quickAmenities = [
    { icon: Wifi, title: "High-Speed Estate Wi-Fi", desc: "Seamless coverage across all suites and gardens." },
    { icon: BookOpen, title: "Heritage Library & Hearth", desc: "Over 800 curated volumes and wood fireplace." },
    { icon: Utensils, title: "Farm-to-Table Dining", desc: "Fresh organic meals prepared all day." },
    { icon: Car, title: "Chauffeured Transfers", desc: "Luxury SUV pickups from Kannur & Bangalore." },
    { icon: BellRing, title: "24-Hour Concierge", desc: "Round-the-clock itinerary and valet assistance." },
    { icon: BatteryCharging, title: "EV Charging Stations", desc: "Complimentary dual-port 22kW chargers." },
  ];

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            Curated Comforts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292B27] font-normal">
            Amenities & Thoughtful Facilities
          </h2>
          <p className="text-sm sm:text-base text-[#73766E] font-light mt-3">
            Every convenience designed to enhance your seclusion without intruding upon nature.
          </p>
        </div>

        {/* Feature Visual Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {primaryAmenities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative aspect-[16/10] overflow-hidden border border-[#E7E4DC] bg-[#E9E2D5]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292B27]/85 via-[#292B27]/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white space-y-2">
                <span className="inline-block px-2.5 py-0.5 bg-[#FFFFFF]/20 backdrop-blur-xs text-[10px] uppercase tracking-widest font-medium border border-white/20">
                  {item.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#F8F6F0]/90 font-light max-w-md">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-4">
          {quickAmenities.map((facility, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#F8F6F0] border border-[#E7E4DC] flex flex-col items-center text-center space-y-3 hover:bg-[#FFFFFF] transition-colors"
            >
              <facility.icon className="w-6 h-6 text-[#78866B]" />
              <h4 className="font-serif text-sm text-[#292B27] font-medium leading-tight">
                {facility.title}
              </h4>
              <p className="text-[11px] text-[#73766E] font-light leading-snug">
                {facility.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Modal / Action Trigger */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenAmenitiesModal}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#414C38] hover:text-[#292B27] border-b border-[#414C38] pb-1 transition-colors"
          >
            <span>Explore All 24 Estate Amenities</span>
          </button>
        </div>
      </div>
    </section>
  );
}

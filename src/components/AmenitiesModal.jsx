"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function AmenitiesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const categories = [
    {
      name: "Wellness & Rejuvenation",
      items: [
        "Temperature-controlled mountain freshwater infinity pool",
        "Ayurvedic wellness pavilion with herbal steam room",
        "Daily morning open-air yoga and meditation sessions",
        "Curated in-suite botanical bath soak rituals",
        "Reflexology pebble foot trail along estate brook",
        "Natural forest-bathing walking pathways",
      ],
    },
    {
      name: "Culinary & Dining",
      items: [
        "Farm-to-table dining at The Veranda & Hearth",
        "Estate-roasted single-origin coffee brewing bar",
        "Daily afternoon sunset tea and artisanal cakes",
        "Private candlelit dinner setups in plantation gazebos",
        "In-suite dining service available around the clock",
        "Chef-led herb garden foraging tours",
      ],
    },
    {
      name: "Estate Comforts & Connectivity",
      items: [
        "High-speed fiber optic Wi-Fi across all suites and grounds",
        "The Hearth Library with 800+ art, philosophy & nature books",
        "Curated vinyl listening station and acoustic acoustics",
        "Dual 22kW Type-2 EV charging stations",
        "Complimentary secure covered valet parking",
        "100% solar power backed by quiet eco-generators",
      ],
    },
    {
      name: "Bespoke Services & Experiences",
      items: [
        "24-Hour dedicated resident concierge team",
        "Chauffeured luxury SUV transfers to Kannur & Bangalore",
        "Guided morning plantation birdwatching walks with resident naturalist",
        "Evening outdoor woodfire hearth gatherings with warm spiced infusions",
        "Complimentary mountain bicycles and trail maps",
        "Stargazing telescope on the Ridge Observation Deck",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#292B27]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#FFFFFF] border border-[#E7E4DC] max-w-3xl w-full text-left shadow-2xl p-6 sm:p-10 overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#73766E] hover:text-[#292B27] rounded transition-colors"
            aria-label="Close amenities modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-8 pb-4 border-b border-[#E7E4DC]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#78866B] font-semibold block mb-1">
              Sanctuary Inclusions
            </span>
            <h3 className="font-serif text-3xl text-[#292B27]">
              All Estate Amenities & Facilities
            </h3>
            <p className="text-xs text-[#73766E] font-light mt-1">
              Every facility thoughtfully integrated into the tranquil plantation landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-h-[60vh] overflow-y-auto pr-2">
            {categories.map((cat, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="font-serif text-lg text-[#292B27] font-medium border-b border-[#E7E4DC] pb-1.5">
                  {cat.name}
                </h4>
                <ul className="space-y-2 text-xs text-[#73766E]">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#78866B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E7E4DC] text-center">
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 bg-[#414C38] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#323B2B]"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

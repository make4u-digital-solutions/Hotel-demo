"use client";

import { motion } from "framer-motion";
import { X, Utensils, Sparkles, Coffee, Wine } from "lucide-react";

export default function MenuModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const courses = [
    {
      course: "First Course • Garden Harvest",
      dish: "Heirloom Tomato & Wild Wood-Sorrel Tart",
      description: "Organic greenhouse tomatoes, whipped buffalo ricotta from local dairy, cold-pressed estate pepper oil.",
    },
    {
      course: "Second Course • Estate Broth",
      dish: "Slow-Simmered Wild Morel & Roasted Jackfruit Consommé",
      description: "Forest-foraged morels, toasted mountain coriander seeds, charred sourdough crisp.",
    },
    {
      course: "Main Course • Hearth & Stone",
      dish: "Claypot Braised Free-Range Country Bird or Smoked Yam Medallion",
      description: "Infused with bird's eye chili, roasted coconut milk reduction, and red hill paddy rice.",
    },
    {
      course: "Dessert • Highland Sweetness",
      dish: "Estate Honeycomb & Dark Cocoa Ganache",
      description: "Single-origin 72% Malabar cocoa, wild honeycomb, smoked sea salt, and passionfruit coulis.",
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
          className="relative bg-[#FFFFFF] border border-[#E7E4DC] max-w-2xl w-full text-left shadow-2xl p-6 sm:p-10 overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#73766E] hover:text-[#292B27] rounded transition-colors"
            aria-label="Close menu modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-8 pb-6 border-b border-[#E7E4DC]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#78866B] font-semibold block mb-1">
              The Veranda & Hearth
            </span>
            <h3 className="font-serif text-3xl text-[#292B27]">
              Sample Four-Course Tasting Menu
            </h3>
            <p className="text-xs text-[#73766E] font-light mt-1">
              Curated daily by Executive Chef Anand Shenoy based on morning harvests.
            </p>
          </div>

          <div className="space-y-6">
            {courses.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#78866B] font-semibold block">
                  {item.course}
                </span>
                <h4 className="font-serif text-xl text-[#292B27] font-medium">{item.dish}</h4>
                <p className="text-xs text-[#73766E] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E7E4DC] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#73766E]">
            <div className="flex items-start gap-2">
              <Wine className="w-4 h-4 text-[#A7895C] shrink-0 mt-0.5" />
              <span>Cellar pairings available with organic natural wines and botanical infusions.</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#78866B] shrink-0 mt-0.5" />
              <span>Plant-based and gluten-sensitive menus graciously prepared upon request.</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 bg-[#414C38] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#323B2B]"
            >
              Return to Website
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

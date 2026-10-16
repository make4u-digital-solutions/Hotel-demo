"use client";

import { useState } from "react";
import { Phone, X, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Hotel Announcement"
      className="relative z-50 bg-[#414C38] text-[#F8F6F0] text-xs sm:text-sm py-2.5 px-4 transition-all duration-300 border-b border-[#414C38]/40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1.5 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#A7895C] shrink-0" />
            <span className="hidden md:inline font-serif italic text-[#E9E2D5]">Seasonal Privilege:</span>
            <span>Complimentary estate breakfast & sunset tea ritual with direct bookings.</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 shrink-0">
          <a
            href="tel:+918272234500"
            className="flex items-center gap-1.5 text-xs text-[#E9E2D5] hover:text-[#FFFFFF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#A7895C] rounded px-1"
          >
            <Phone className="w-3 h-3 text-[#A7895C]" />
            <span>Concierge: +91 8272 234 500</span>
          </a>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Dismiss promotional announcement"
            className="text-[#E9E2D5]/70 hover:text-white transition-colors p-1 rounded hover:bg-[#292B27]/30 focus:outline-none focus:ring-1 focus:ring-[#A7895C]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

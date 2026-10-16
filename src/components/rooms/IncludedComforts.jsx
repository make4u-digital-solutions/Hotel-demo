"use client";

import {
  BedDouble,
  Wind,
  Coffee,
  Sparkles,
  Moon,
  Wifi,
  Utensils,
  ShieldCheck,
} from "lucide-react";
import { INCLUDED_COMFORTS } from "@/data/roomsData";

export default function IncludedComforts() {
  const icons = [
    BedDouble,
    Wind,
    Coffee,
    Sparkles,
    Moon,
    Wifi,
    Utensils,
    ShieldCheck,
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            The Haven Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292B27] font-normal">
            Included in Every Suite
          </h2>
          <p className="text-sm text-[#73766E] font-light mt-2">
            Thoughtful essentials crafted to make your private stay effortless and deeply restorative.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {INCLUDED_COMFORTS.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 bg-[#F8F6F0] border border-[#E7E4DC] flex flex-col justify-between space-y-4 hover:border-[#78866B]/50 transition-colors"
              >
                <div className="w-10 h-10 bg-white border border-[#E7E4DC] flex items-center justify-center text-[#414C38] shrink-0">
                  <Icon className="w-5 h-5 text-[#78866B]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#292B27] font-medium mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#73766E] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

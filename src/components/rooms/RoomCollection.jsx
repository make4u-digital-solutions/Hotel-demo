"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, Users, Bed, Check, ArrowRight, Eye, Sparkles } from "lucide-react";

export default function RoomCollection({ rooms = [], onSelectRoom, onBookRoom }) {
  if (rooms.length === 0) {
    return (
      <div className="py-24 text-center text-[#73766E] max-w-md mx-auto">
        <p className="text-base font-serif text-[#292B27]">No accommodations found in this category.</p>
        <p className="text-xs mt-2">Please select another category to view available suites.</p>
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {rooms.map((room, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-16 sm:pb-24 border-b border-[#E7E4DC] last:border-b-0 last:pb-0`}
            >
              {/* Room Image Presentation */}
              <div
                className={`lg:col-span-7 relative ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="group relative aspect-[16/10] overflow-hidden bg-[#E9E2D5] border border-[#E7E4DC] shadow-md shadow-[#292B27]/5">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle category badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-[#414C38] border border-[#E7E4DC]">
                    {room.category}
                  </div>
                  {/* View tag */}
                  <div className="absolute bottom-4 left-4 bg-[#292B27]/80 backdrop-blur-xs px-3 py-1 text-[11px] uppercase tracking-wider text-[#E9E2D5] hidden sm:block">
                    {room.view}
                  </div>
                </div>
              </div>

              {/* Room Content Description */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#78866B] font-semibold block mb-1">
                    {room.tagline}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#292B27] font-normal leading-tight">
                    {room.name}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#73766E] font-light leading-relaxed">
                  {room.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-3 py-3.5 border-t border-b border-[#E7E4DC] text-xs text-[#292B27]">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#78866B] shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase text-[#73766E] block">Space</span>
                      <span className="font-medium">{room.size.split("/")[0]}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[#78866B] shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase text-[#73766E] block">Bedding</span>
                      <span className="font-medium truncate">{room.bed}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#78866B] shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase text-[#73766E] block">Occupancy</span>
                      <span className="font-medium">{room.occupancy.replace("Up to ", "")}</span>
                    </div>
                  </div>
                </div>

                {/* Key Features List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#73766E]">
                  {room.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#78866B] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing and Action CTAs */}
                <div className="pt-4 border-t border-[#E7E4DC] space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#73766E] block">
                        Sample Nightly Rate (INR)
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-2xl sm:text-3xl text-[#292B27] font-semibold">
                          {room.price}
                        </span>
                        <span className="text-xs text-[#73766E] font-light">
                          / night + taxes
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] text-[#78866B] bg-[#F8F6F0] px-2.5 py-1 border border-[#E7E4DC] font-medium hidden sm:inline">
                      Breakfast Included
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectRoom(room)}
                      className="w-full py-3 px-4 text-xs uppercase tracking-wider font-medium text-[#292B27] bg-[#FFFFFF] border border-[#E7E4DC] hover:border-[#292B27] transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#78866B]" />
                      <span>View Suite Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onBookRoom(room)}
                      className="w-full py-3 px-4 text-xs uppercase tracking-wider font-medium text-white bg-[#414C38] hover:bg-[#323B2B] transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>Book This Suite</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E9E2D5]" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

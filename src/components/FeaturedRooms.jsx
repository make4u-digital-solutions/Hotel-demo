"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Maximize2, Users, Bed, Sparkles, Check } from "lucide-react";

import Link from "next/link";
import { ROOMS_DATA } from "@/data/roomsData";
export { ROOMS_DATA };

export default function FeaturedRooms({ onSelectRoom, onBookRoom }) {
  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#FFFFFF] border-t border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            Your Private Retreat
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292B27] font-normal leading-tight mb-4">
            Rooms Designed Around Your Comfort.
          </h2>
          <p className="text-sm sm:text-base text-[#73766E] font-light leading-relaxed">
            Every suite is an understated sanctuary shaped by natural stone, warm teak, and expansive views of the plantation canopy.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {ROOMS_DATA.map((room, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="group bg-[#F8F6F0] border border-[#E7E4DC] flex flex-col hover:border-[#78866B]/50 transition-colors duration-300"
            >
              {/* Room Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E2D5]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] uppercase tracking-wider font-medium text-[#414C38] border border-[#E7E4DC]">
                  Sample Category
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-2xl text-[#292B27] font-medium group-hover:text-[#414C38] transition-colors">
                      {room.name}
                    </h3>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[#78866B] font-medium mb-3">
                    {room.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#73766E] font-light leading-relaxed mb-4">
                    {room.description}
                  </p>

                  {/* Room Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#E7E4DC] text-xs text-[#292B27]">
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#78866B] shrink-0" />
                      <span className="truncate">{room.size.split("/")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#78866B] shrink-0" />
                      <span className="truncate">{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#78866B] shrink-0" />
                      <span className="truncate">{room.occupancy.split(" ")[2]} Guests</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {room.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-[#73766E]">
                        <Check className="w-3 h-3 text-[#78866B] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Actions */}
                <div className="pt-4 border-t border-[#E7E4DC] space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#73766E] block">
                        Sample From (INR)
                      </span>
                      <span className="font-serif text-xl sm:text-2xl text-[#292B27] font-semibold">
                        {room.price}
                      </span>
                      <span className="text-xs text-[#73766E] font-light"> / night + taxes</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectRoom(room)}
                      className="w-full py-2.5 px-3 text-xs uppercase tracking-wider font-medium text-[#292B27] bg-[#FFFFFF] border border-[#E7E4DC] hover:border-[#292B27] transition-colors text-center"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => onBookRoom(room)}
                      className="w-full py-2.5 px-3 text-xs uppercase tracking-wider font-medium text-white bg-[#414C38] hover:bg-[#323B2B] transition-colors text-center"
                    >
                      Book Room
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Accommodations Link */}
        <div className="mt-14 text-center">
          <Link
            href="/rooms"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.16em] font-medium text-[#414C38] hover:text-[#292B27] transition-colors pb-1 border-b border-[#414C38]"
          >
            <span>Explore Complete Rooms & Suites Collection</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

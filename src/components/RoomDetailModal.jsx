"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X, Check, Maximize2, Bed, Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function RoomDetailModal({ room, onClose, onBookRoom }) {
  if (!room) return null;

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
          className="relative bg-[#FFFFFF] border border-[#E7E4DC] max-w-3xl w-full text-left shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-[#292B27] rounded-full transition-colors shadow-xs"
            aria-label="Close room details modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] w-full bg-[#E9E2D5]">
            <Image
              src={room.image}
              alt={room.name}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#FFFFFF]/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#414C38] border border-[#E7E4DC]">
              {room.tagline}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#E7E4DC] pb-5">
              <div>
                <h3 className="font-serif text-3xl text-[#292B27] font-medium">{room.name}</h3>
                <p className="text-xs uppercase tracking-wider text-[#78866B] mt-1 font-medium">
                  Highland View • Private Veranda
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#73766E] block">
                  Sample Direct Tariff
                </span>
                <span className="font-serif text-3xl text-[#292B27] font-semibold">{room.price}</span>
                <span className="text-xs text-[#73766E]"> / night</span>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-[#F8F6F0] border border-[#E7E4DC] text-xs">
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#78866B]" />
                <div>
                  <span className="text-[#73766E] block text-[10px] uppercase">Dimensions</span>
                  <span className="font-medium text-[#292B27]">{room.size}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#78866B]" />
                <div>
                  <span className="text-[#73766E] block text-[10px] uppercase">Bed Setup</span>
                  <span className="font-medium text-[#292B27]">{room.bed}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#78866B]" />
                <div>
                  <span className="text-[#73766E] block text-[10px] uppercase">Capacity</span>
                  <span className="font-medium text-[#292B27]">{room.occupancy}</span>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <p className="text-sm text-[#73766E] font-light leading-relaxed">
              {room.description} Handcrafted by local artisans using indigenous teakwood and mountain stone. Designed to bring the soothing sights and scents of the private estate indoors while providing acoustic tranquility.
            </p>

            {/* Detailed Amenities */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.16em] text-[#292B27] font-semibold mb-3">
                Suite Inclusions & Amenities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#73766E]">
                {room.detailedAmenities?.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#78866B] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Action */}
            <div className="pt-4 border-t border-[#E7E4DC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#73766E]">
                <span className="font-medium text-[#292B27]">Flexible Guarantee:</span> Free changes up to 7 days before check-in.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto py-2.5 px-4 text-xs uppercase tracking-wider font-medium text-[#292B27] border border-[#E7E4DC] hover:border-[#292B27]"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookRoom(room);
                  }}
                  className="w-full sm:w-auto py-2.5 px-6 text-xs uppercase tracking-wider font-medium text-white bg-[#414C38] hover:bg-[#323B2B] flex items-center justify-center gap-2"
                >
                  <span>Book This Suite</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E9E2D5]" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

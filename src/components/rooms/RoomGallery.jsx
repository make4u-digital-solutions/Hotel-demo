"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import { ROOM_GALLERY } from "@/data/roomsData";

export default function RoomGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = () => {
    setLightboxIndex((prev) => (prev + 1) % ROOM_GALLERY.length);
  };

  const showPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + ROOM_GALLERY.length) % ROOM_GALLERY.length);
  };

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="py-20 sm:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            Interiors & Details
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292B27] font-normal">
            Inside the Suites
          </h2>
          <p className="text-xs sm:text-sm text-[#73766E] font-light mt-2">
            Warm timber craftsmanship, natural stone textures, and uninterrupted canopy views.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 auto-rows-[250px]">
          {ROOM_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`group relative overflow-hidden bg-[#E9E2D5] border border-[#E7E4DC] cursor-pointer ${item.aspect}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#292B27]/20 group-hover:bg-[#292B27]/40 transition-colors" />

              {/* Hover overlay text */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#292B27]/80 via-transparent to-transparent">
                <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E9E2D5] font-light mt-0.5">{item.subtitle}</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#E9E2D5] mt-2">
                  <Maximize className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && ROOM_GALLERY[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#292B27]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 text-[#E9E2D5] hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] border border-[#FFFFFF]/20">
                <Image
                  src={ROOM_GALLERY[lightboxIndex].src}
                  alt={ROOM_GALLERY[lightboxIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <div className="w-full text-center mt-4 text-[#F8F6F0]">
                <span className="text-[11px] uppercase tracking-widest text-[#A7895C]">
                  {lightboxIndex + 1} of {ROOM_GALLERY.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl mt-1">
                  {ROOM_GALLERY[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E9E2D5]/80 max-w-xl mx-auto mt-1 font-light">
                  {ROOM_GALLERY[lightboxIndex].subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

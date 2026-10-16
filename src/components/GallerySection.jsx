"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, Maximize } from "lucide-react";

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Architecture",
    title: "Heritage Stone Architecture & Misty Courtyard",
    caption: "Carved from indigenous granite and reclaimed teakwood, surrounded by forty acres of ancient forest.",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    id: 2,
    category: "Suites",
    title: "Presidential Bedroom with Natural Timber & Linen",
    caption: "Thoughtfully oriented to catch the first golden rays breaking over the eastern valley.",
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: 3,
    category: "Dining",
    title: "The Veranda Table Set for Evening Tasting",
    caption: "Candlelit dinners overlooking terraced spice gardens and pine groves.",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: 4,
    category: "Wellness",
    title: "Mountain Ridge Freshwater Infinity Pool",
    caption: "Warmed by geothermal heat and floating above the morning sea of mist.",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: 5,
    category: "Grounds",
    title: "Private Shade-Grown Plantation Footpaths",
    caption: "Winding trails through organic coffee, cardamom, and giant wild fig trees.",
    src: "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=1200&q=85",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: 6,
    category: "Suites",
    title: "Freestanding Brass Soaking Tub Overlooking Canopy",
    caption: "A restful evening ritual infused with garden eucalyptus and mountain salt.",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    span: "md:col-span-4 md:row-span-1",
  },
];

const CATEGORIES = ["All", "Architecture", "Suites", "Dining", "Wellness", "Grounds"];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const showPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            Visual Journal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292B27] font-normal">
            Life at The Verdant Haven
          </h2>
          <p className="text-sm text-[#73766E] font-light mt-3">
            Glimpses of daily serenity, natural architecture, and highland atmosphere.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider transition-all border ${
                  activeFilter === cat
                    ? "bg-[#414C38] text-white border-[#414C38]"
                    : "bg-[#F8F6F0] text-[#73766E] border-[#E7E4DC] hover:text-[#292B27]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 auto-rows-[260px]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`group relative overflow-hidden bg-[#E9E2D5] border border-[#E7E4DC] cursor-pointer ${item.span}`}
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
                <span className="text-[10px] uppercase tracking-widest text-[#E9E2D5] font-medium mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">{item.title}</h3>
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
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
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

              {/* Main Lightbox Image */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] border border-[#FFFFFF]/20">
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <div className="w-full text-center mt-4 text-[#F8F6F0]">
                <span className="text-[11px] uppercase tracking-widest text-[#A7895C]">
                  {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of{" "}
                  {filteredItems.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E9E2D5]/80 max-w-xl mx-auto mt-1 font-light">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

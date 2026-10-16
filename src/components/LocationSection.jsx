"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, Plane, Car, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const nearbyPlaces = [
    { name: "Abbey Waterfalls & Rainforest", distance: "12 km", time: "25 mins drive", icon: Compass },
    { name: "Raja's Seat Sunset Promenade", distance: "8.5 km", time: "20 mins drive", icon: Compass },
    { name: "Dubare Reserve & Kaveri River", distance: "28 km", time: "50 mins drive", icon: Compass },
    { name: "Kannur Int'l Airport (CNN)", distance: "88 km", time: "2.5 hrs scenic route", icon: Plane },
    { name: "Bengaluru Int'l Airport (BLR)", distance: "260 km", time: "5.5 hrs highway drive", icon: Car },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8F6F0] border-t border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text and Directions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
                Highland Sanctuary
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292B27] font-normal leading-tight">
                Explore Our Secluded Location
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#73766E] font-light leading-relaxed">
              Perched at 3,800 feet amidst the misty slopes of the Western Ghats, The Verdant Haven is protected by pristine wilderness while remaining comfortably accessible by scenic mountain roads.
            </p>

            {/* Address Box */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E7E4DC] space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#414C38] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#292B27] font-medium">Estate Address (Sample)</h4>
                  <p className="text-xs sm:text-sm text-[#73766E] font-light mt-1">
                    Estate Road 4, Valley View Reserve, Madikeri, Coorg, Karnataka 571201, India
                  </p>
                  <p className="text-[11px] text-[#78866B] mt-1 font-mono">
                    Coordinates: 12.4244° N, 75.7382° E
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby Distances */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-[0.16em] text-[#292B27] font-semibold">
                Key Scenic Distances & Transit
              </h4>
              <div className="divide-y divide-[#E7E4DC] bg-[#FFFFFF] border border-[#E7E4DC]">
                {nearbyPlaces.map((place, idx) => (
                  <div key={idx} className="p-3.5 sm:px-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <place.icon className="w-4 h-4 text-[#78866B] shrink-0" />
                      <span className="text-[#292B27] font-medium">{place.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#414C38] font-medium">{place.distance}</span>
                      <span className="text-[#73766E] font-light block text-[11px]">{place.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Madikeri,Coorg,Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#414C38] hover:bg-[#323B2B] text-white text-xs uppercase tracking-[0.16em] font-medium transition-colors border border-[#414C38]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E9E2D5]" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Styled Map Graphic / Visual representation */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#E9E2D5] border border-[#E7E4DC] overflow-hidden shadow-lg shadow-[#292B27]/5">
              {/* Map Graphic Simulation */}
              <div className="absolute inset-0 bg-[#F4EFE6] flex items-center justify-center p-8">
                {/* Contour Lines & Graphic details */}
                <svg className="w-full h-full opacity-40 text-[#78866B]" viewBox="0 0 400 300" fill="none">
                  <path d="M0,80 Q100,20 200,90 T400,60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M0,140 Q120,90 220,160 T400,120" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0,200 Q80,180 200,220 T400,180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M0,260 Q150,220 250,280 T400,240" stroke="currentColor" strokeWidth="1" />
                </svg>

                {/* Central Pin Card */}
                <div className="relative z-10 bg-[#FFFFFF] p-6 border border-[#E7E4DC] shadow-xl max-w-xs text-center space-y-3">
                  <div className="w-10 h-10 bg-[#414C38] text-[#FFFFFF] rounded-full flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-5 h-5 text-[#E9E2D5]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#292B27] font-medium">The Verdant Haven</h4>
                    <p className="text-[11px] text-[#78866B] uppercase tracking-wider font-medium mt-0.5">
                      Coorg Rainforest Estate
                    </p>
                    <p className="text-xs text-[#73766E] font-light mt-2">
                      Elevation: 3,800 ft above sea level • Quiet Zone
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#E7E4DC] text-[10px] text-[#73766E] italic">
                    Map preview for visual reference. Real navigation verified upon confirmation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

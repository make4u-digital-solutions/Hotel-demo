"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { ROOMS_DATA } from "@/data/roomsData";

export default function RoomComparison({ onSelectRoom }) {
  const [activeMobileRoom, setActiveMobileRoom] = useState(ROOMS_DATA[0].id);

  const attributes = [
    { label: "Room Size", key: "size" },
    { label: "Bed Setup", key: "bed" },
    { label: "Max Guests", key: "capacity" },
    { label: "View & Outlook", key: "view" },
    { label: "Veranda / Balcony", key: "balcony" },
    { label: "Bath Amenities", key: "bath" },
    { label: "Pool Privilege", key: "pool" },
    { label: "Butler / Service", key: "butler" },
    { label: "Daily Breakfast", key: "breakfast" },
    { label: "Wi-Fi Speed", key: "wifi" },
  ];

  const selectedMobileRoomData =
    ROOMS_DATA.find((r) => r.id === activeMobileRoom) || ROOMS_DATA[0];

  return (
    <section className="py-20 sm:py-28 bg-[#F8F6F0] border-t border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            Side-by-Side Comparison
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292B27] font-normal">
            Compare Our Accommodations
          </h2>
          <p className="text-xs sm:text-sm text-[#73766E] font-light mt-2">
            Detailed breakdown of dimensions, outlooks, and exclusive suite privileges.
          </p>
        </div>

        {/* Desktop Table View (Hidden on mobile) */}
        <div className="hidden lg:block bg-[#FFFFFF] border border-[#E7E4DC] shadow-xs overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E7E4DC] bg-[#FAF8F5]">
                <th className="p-5 text-xs uppercase tracking-wider text-[#73766E] font-medium w-1/5">
                  Suite Features
                </th>
                {ROOMS_DATA.map((room) => (
                  <th key={room.id} className="p-5 w-1/5 border-l border-[#E7E4DC]">
                    <span className="font-serif text-lg text-[#292B27] font-medium block">
                      {room.name}
                    </span>
                    <span className="text-xs text-[#78866B] font-normal block mt-0.5">
                      From {room.price}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E4DC] text-xs text-[#292B27]">
              {attributes.map((attr, idx) => (
                <tr key={idx} className="hover:bg-[#F8F6F0]/60 transition-colors">
                  <td className="p-4 font-medium text-[#73766E] bg-[#FAF8F5]/50">
                    {attr.label}
                  </td>
                  {ROOMS_DATA.map((room) => (
                    <td key={room.id} className="p-4 border-l border-[#E7E4DC] font-light">
                      {room.comparison[attr.key]}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Action Row */}
              <tr className="bg-[#FAF8F5]">
                <td className="p-4 font-medium text-[#73766E]">Action</td>
                {ROOMS_DATA.map((room) => (
                  <td key={room.id} className="p-4 border-l border-[#E7E4DC]">
                    <button
                      type="button"
                      onClick={() => onSelectRoom(room)}
                      className="w-full py-2 px-3 text-[11px] uppercase tracking-wider font-medium text-white bg-[#414C38] hover:bg-[#323B2B] transition-colors text-center"
                    >
                      View Details
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Stacked Tab Card (Visible on mobile/tablet) */}
        <div className="lg:hidden space-y-6">
          {/* Room Selector Pills */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {ROOMS_DATA.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() => setActiveMobileRoom(room.id)}
                className={`px-3.5 py-2 text-xs uppercase tracking-wider whitespace-nowrap border shrink-0 transition-colors ${
                  activeMobileRoom === room.id
                    ? "bg-[#414C38] text-white border-[#414C38] font-medium"
                    : "bg-[#FFFFFF] text-[#73766E] border-[#E7E4DC]"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          {/* Active Suite Specs Card */}
          <div className="bg-[#FFFFFF] border border-[#E7E4DC] p-6 shadow-xs space-y-4">
            <div className="border-b border-[#E7E4DC] pb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#78866B] font-semibold block">
                {selectedMobileRoomData.category}
              </span>
              <h3 className="font-serif text-2xl text-[#292B27]">
                {selectedMobileRoomData.name}
              </h3>
              <p className="text-xs text-[#73766E] mt-1">
                From {selectedMobileRoomData.price} / night
              </p>
            </div>

            <div className="divide-y divide-[#E7E4DC] text-xs">
              {attributes.map((attr, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between">
                  <span className="text-[#73766E] font-medium">{attr.label}</span>
                  <span className="text-[#292B27] font-light text-right max-w-[55%]">
                    {selectedMobileRoomData.comparison[attr.key]}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectRoom(selectedMobileRoomData)}
                className="w-full py-3 bg-[#414C38] text-white text-xs uppercase tracking-wider font-medium text-center hover:bg-[#323B2B]"
              >
                View Full Specifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

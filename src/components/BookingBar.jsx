"use client";

import { useState, useEffect } from "react";
import { Calendar, Users, DoorClosed, ArrowRight, AlertCircle } from "lucide-react";

export default function BookingBar({ onCheckAvailability }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [rooms, setRooms] = useState("1");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!checkIn || !checkOut) {
      setErrorMessage("Please select both check-in and check-out dates.");
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      setErrorMessage("Check-out date must be after check-in date.");
      return;
    }

    if (onCheckAvailability) {
      onCheckAvailability({
        checkIn,
        checkOut,
        adults: parseInt(adults, 10),
        children: parseInt(children, 10),
        rooms: parseInt(rooms, 10),
      });
    }
  };

  return (
    <div className="relative z-20 -mt-10 sm:-mt-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFFFF] border border-[#E7E4DC] p-4 sm:p-6 shadow-xl shadow-[#292B27]/5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Check-In */}
            <div className="space-y-1.5">
              <label
                htmlFor="checkIn"
                className="block text-[11px] uppercase tracking-[0.14em] text-[#73766E] font-medium"
              >
                Check-In Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="checkIn"
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (new Date(e.target.value) >= new Date(checkOut)) {
                      const nextDay = new Date(new Date(e.target.value).getTime() + 86400000)
                        .toISOString()
                        .split("T")[0];
                      setCheckOut(nextDay);
                    }
                  }}
                  required
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none transition-colors"
                />
                <Calendar className="w-4 h-4 text-[#78866B] absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Check-Out */}
            <div className="space-y-1.5">
              <label
                htmlFor="checkOut"
                className="block text-[11px] uppercase tracking-[0.14em] text-[#73766E] font-medium"
              >
                Check-Out Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="checkOut"
                  value={checkOut}
                  min={checkIn || undefined}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none transition-colors"
                />
                <Calendar className="w-4 h-4 text-[#78866B] absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Guests (Adults & Children) */}
            <div className="space-y-1.5">
              <label
                htmlFor="adults"
                className="block text-[11px] uppercase tracking-[0.14em] text-[#73766E] font-medium"
              >
                Adults & Children
              </label>
              <div className="relative grid grid-cols-2 gap-2">
                <div className="relative">
                  <select
                    id="adults"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full pl-8 pr-2 py-2.5 text-xs sm:text-sm text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Adult{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                  <Users className="w-3.5 h-3.5 text-[#78866B] absolute left-2.5 top-3.5 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    id="children"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full px-2 py-2.5 text-xs sm:text-sm text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none appearance-none cursor-pointer"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} Child{num !== 1 ? "ren" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Rooms */}
            <div className="space-y-1.5">
              <label
                htmlFor="rooms"
                className="block text-[11px] uppercase tracking-[0.14em] text-[#73766E] font-medium"
              >
                Rooms
              </label>
              <div className="relative">
                <select
                  id="rooms"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Room" : "Rooms"}
                    </option>
                  ))}
                </select>
                <DoorClosed className="w-4 h-4 text-[#78866B] absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Action Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-[42px] inline-flex items-center justify-center gap-2 px-6 bg-[#414C38] hover:bg-[#323B2B] text-white text-xs uppercase tracking-[0.15em] font-medium transition-all active:scale-[0.98] border border-[#414C38] focus:outline-none focus:ring-2 focus:ring-[#414C38]"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E9E2D5]" />
              </button>
            </div>
          </div>

          {/* Validation Feedback */}
          {errorMessage && (
            <div className="flex items-center gap-2 text-xs text-[#993A3A] bg-[#FDF4F4] border border-[#E8C5C5] px-3 py-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

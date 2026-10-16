"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, DoorClosed, CheckCircle, ShieldCheck, Sparkles } from "lucide-react";
import { ROOMS_DATA } from "./FeaturedRooms";

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const [selectedRoomId, setSelectedRoomId] = useState(
    initialData.roomId || "deluxe-garden"
  );
  const [checkIn, setCheckIn] = useState(initialData.checkIn || "");
  const [checkOut, setCheckOut] = useState(initialData.checkOut || "");
  const [adults, setAdults] = useState(initialData.adults || 2);
  const [children, setChildren] = useState(initialData.children || 0);
  const [roomsCount, setRoomsCount] = useState(initialData.rooms || 1);

  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const selectedRoom =
    ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const randomCode = "VH-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(randomCode);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
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
          className="relative bg-[#FFFFFF] border border-[#E7E4DC] max-w-2xl w-full text-left shadow-2xl p-6 sm:p-8 overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#73766E] hover:text-[#292B27] rounded transition-colors focus:outline-none focus:ring-1 focus:ring-[#78866B]"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#78866B] font-semibold block mb-1">
                  Direct Reservation Enquiry
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#292B27]">
                  Reserve Your Stay at The Verdant Haven
                </h3>
                <p className="text-xs text-[#73766E] font-light mt-1">
                  Complete your details below to check live allocation and reserve direct booking privileges.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-5">
                {/* Room Selection */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#73766E] font-medium mb-1.5">
                    Select Accommodations
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {ROOMS_DATA.map((room) => (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`p-3 text-left border text-xs transition-all ${
                          selectedRoomId === room.id
                            ? "border-[#414C38] bg-[#F8F6F0] ring-1 ring-[#414C38]"
                            : "border-[#E7E4DC] bg-white hover:border-[#78866B]"
                        }`}
                      >
                        <span className="font-serif font-medium text-sm text-[#292B27] block truncate">
                          {room.name}
                        </span>
                        <span className="text-[11px] text-[#78866B] block mt-0.5">
                          From {room.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#73766E] font-medium mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-xs text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#73766E] font-medium mb-1">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-xs text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Guest Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#73766E] font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Meera Singhania"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-xs text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#73766E] font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-xs text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#73766E] font-medium mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-xs text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#73766E] font-medium mb-1">
                    Special Requests & Arrival Notes
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Dietary preferences, airport transfer requirements, honeymoon setup..."
                    className="w-full px-3 py-2 text-xs text-[#292B27] bg-[#F8F6F0] border border-[#E7E4DC] focus:bg-white focus:border-[#414C38] focus:outline-none"
                  />
                </div>

                {/* Direct Booking Inclusions Badge */}
                <div className="p-3 bg-[#F8F6F0] border border-[#E7E4DC] flex items-center gap-3 text-xs text-[#414C38]">
                  <Sparkles className="w-4 h-4 text-[#A7895C] shrink-0" />
                  <span>
                    Direct Booking Privileges: Complimentary estate breakfast, late checkout (subject to availability), & welcome tea.
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#414C38] hover:bg-[#323B2B] text-white text-xs uppercase tracking-[0.16em] font-medium transition-colors"
                >
                  Submit Reservation Request
                </button>
              </form>
            </div>
          ) : (
            /* Confirmation state */
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-[#F8F6F0] border border-[#78866B] rounded-full flex items-center justify-center mx-auto text-[#414C38]">
                <CheckCircle className="w-8 h-8 text-[#78866B]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#78866B] font-semibold block mb-1">
                  Enquiry Registered (Sample)
                </span>
                <h3 className="font-serif text-3xl text-[#292B27]">
                  Thank You, {guestName || "Guest"}
                </h3>
              </div>

              <div className="bg-[#F8F6F0] border border-[#E7E4DC] p-5 max-w-md mx-auto text-xs space-y-2 text-[#292B27]">
                <div className="flex justify-between py-1 border-b border-[#E7E4DC]">
                  <span className="text-[#73766E]">Reference Code:</span>
                  <span className="font-mono font-semibold text-[#414C38]">{referenceCode}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7E4DC]">
                  <span className="text-[#73766E]">Selected Suite:</span>
                  <span className="font-medium">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7E4DC]">
                  <span className="text-[#73766E]">Sample Tariff:</span>
                  <span className="font-semibold">{selectedRoom.price} / night</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#73766E]">Contact:</span>
                  <span>{guestEmail || "Email provided"}</span>
                </div>
              </div>

              <p className="text-xs text-[#73766E] max-w-md mx-auto leading-relaxed">
                *This is a demonstration booking confirmation. In production, this would trigger an instant SMS & email confirmation through your reservation management software.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-[#414C38] hover:bg-[#323B2B] text-white text-xs uppercase tracking-wider font-medium"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

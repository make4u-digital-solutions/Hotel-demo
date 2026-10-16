"use client";

import { useState, useMemo } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import RoomDetailModal from "@/components/RoomDetailModal";
import GSAPAnimations from "@/components/GSAPAnimations";

import RoomsHero from "./RoomsHero";
import IntroDescription from "./IntroDescription";
import RoomFilters from "./RoomFilters";
import RoomCollection from "./RoomCollection";
import RoomComparison from "./RoomComparison";
import IncludedComforts from "./IncludedComforts";
import RoomGallery from "./RoomGallery";
import BookingAssistance from "./BookingAssistance";
import RoomsFAQ from "./RoomsFAQ";
import RoomsCTA from "./RoomsCTA";

import { ROOMS_DATA, ROOM_CATEGORIES } from "@/data/roomsData";

export default function RoomsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All Rooms");
  const [sortBy, setSortBy] = useState("recommended");

  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});
  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);

  // Filter and sort rooms
  const filteredAndSortedRooms = useMemo(() => {
    let result = [...ROOMS_DATA];

    if (activeCategory !== "All Rooms") {
      result = result.filter((room) => room.category === activeCategory);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.priceNumber - b.priceNumber);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.priceNumber - a.priceNumber);
    } else if (sortBy === "size") {
      // parse number from "45 sq.m / 485 sq.ft"
      result.sort((a, b) => {
        const sizeA = parseInt(a.size) || 0;
        const sizeB = parseInt(b.size) || 0;
        return sizeB - sizeA;
      });
    }

    return result;
  }, [activeCategory, sortBy]);

  // Open booking modal with pre-selected room or default
  const handleOpenBooking = (customData = {}) => {
    setBookingInitialData(customData);
    setBookingModalOpen(true);
  };

  const handleBookRoom = (room) => {
    handleOpenBooking({
      roomId: room.id,
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#292B27] flex flex-col selection:bg-[#78866B]/20 selection:text-[#292B27]">
      {/* GSAP Scroll Animations Context */}
      <GSAPAnimations />

      {/* Section 1: Announcement Bar */}
      <AnnouncementBar />

      {/* Section 1: Existing Responsive Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Section 2: Rooms & Suites Hero */}
        <RoomsHero />

        {/* Section 3: Introductory Room Description */}
        <IntroDescription />

        {/* Section 4: Room Category Filters */}
        <RoomFilters
          categories={ROOM_CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCount={filteredAndSortedRooms.length}
        />

        {/* Section 5: Featured Rooms & Suites (Collection) */}
        <RoomCollection
          rooms={filteredAndSortedRooms}
          onSelectRoom={(room) => setSelectedRoomDetail(room)}
          onBookRoom={handleBookRoom}
        />

        {/* Section 7: Room Amenities Comparison */}
        <RoomComparison
          onSelectRoom={(room) => setSelectedRoomDetail(room)}
        />

        {/* Section 8: Included Comforts */}
        <IncludedComforts />

        {/* Section 9: Room Gallery */}
        <RoomGallery />

        {/* Section 10: Booking Assistance */}
        <BookingAssistance
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 11: Frequently Asked Questions */}
        <RoomsFAQ />

        {/* Section 12: Final Booking CTA */}
        <RoomsCTA
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Section 13: Existing Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        key={
          (bookingInitialData.roomId || "") +
          (bookingInitialData.checkIn || "") +
          (bookingModalOpen ? "-open" : "-closed")
        }
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />

      <RoomDetailModal
        room={selectedRoomDetail}
        onClose={() => setSelectedRoomDetail(null)}
        onBookRoom={(room) => {
          setSelectedRoomDetail(null);
          handleBookRoom(room);
        }}
      />
    </div>
  );
}

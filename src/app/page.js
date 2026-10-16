"use client";

import { useState, Suspense } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingBar from "@/components/BookingBar";
import WelcomeSection from "@/components/WelcomeSection";
import FeaturedRooms from "@/components/FeaturedRooms";
import WhyChooseUs from "@/components/WhyChooseUs";
import AmenitiesSection from "@/components/AmenitiesSection";
import DiningSection from "@/components/DiningSection";
import SpecialOffers from "@/components/SpecialOffers";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import FinalBookingCTA from "@/components/FinalBookingCTA";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import RoomDetailModal from "@/components/RoomDetailModal";
import MenuModal from "@/components/MenuModal";
import AmenitiesModal from "@/components/AmenitiesModal";
import GSAPAnimations from "@/components/GSAPAnimations";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});
  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);

  // Trigger Booking Modal from different sections
  const handleOpenBooking = (customData = {}) => {
    setBookingInitialData(customData);
    setBookingModalOpen(true);
  };

  // From BookingBar
  const handleCheckAvailability = (searchParams) => {
    handleOpenBooking({
      checkIn: searchParams.checkIn,
      checkOut: searchParams.checkOut,
      adults: searchParams.adults,
      children: searchParams.children,
      rooms: searchParams.rooms,
    });
  };

  // From FeaturedRooms cards
  const handleBookRoom = (room) => {
    handleOpenBooking({
      roomId: room.id,
    });
  };

  // From SpecialOffers
  const handleClaimOffer = (offer) => {
    handleOpenBooking({
      offerId: offer.id,
      offerTitle: offer.title,
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#292B27] flex flex-col selection:bg-[#78866B]/20 selection:text-[#292B27]">
      {/* GSAP Scroll Animations Context */}
      <GSAPAnimations />

      {/* Section 1: Announcement Bar */}
      <AnnouncementBar />

      {/* Section 2: Premium Responsive Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Section 3: Cinematic Hero */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 4: Booking Search Bar */}
        <Suspense
          fallback={
            <div className="relative z-20 -mt-10 sm:-mt-14 max-w-6xl mx-auto px-4 h-28 bg-[#FFFFFF] border border-[#E7E4DC] animate-pulse" />
          }
        >
          <BookingBar onCheckAvailability={handleCheckAvailability} />
        </Suspense>

        {/* Section 5: Welcome to the Hotel */}
        <WelcomeSection
          onOpenStory={() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Section 6: Featured Rooms & Suites */}
        <FeaturedRooms
          onSelectRoom={(room) => setSelectedRoomDetail(room)}
          onBookRoom={handleBookRoom}
        />

        {/* Section 7: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 8: Amenities & Facilities */}
        <AmenitiesSection
          onOpenAmenitiesModal={() => setAmenitiesModalOpen(true)}
        />

        {/* Section 9: Dining Experience */}
        <DiningSection onOpenMenu={() => setMenuModalOpen(true)} />

        {/* Section 10: Special Offers */}
        <SpecialOffers onClaimOffer={handleClaimOffer} />

        {/* Section 11: Guest Testimonials */}
        <TestimonialsSection />

        {/* Section 12: Hotel Gallery */}
        <GallerySection />

        {/* Section 13: Explore Our Location */}
        <LocationSection />

        {/* Section 14: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 15: Final Booking CTA */}
        <FinalBookingCTA
          onOpenBooking={() => handleOpenBooking()}
          onOpenContact={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </main>

      {/* Section 16: Footer */}
      <Footer />

      {/* Modals & Drawers */}
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

      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
      />

      <AmenitiesModal
        isOpen={amenitiesModalOpen}
        onClose={() => setAmenitiesModalOpen(false)}
      />
    </div>
  );
}

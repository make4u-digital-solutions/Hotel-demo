"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, CalendarDays, Phone } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Rooms & Suites", href: "#rooms" },
  { name: "Experiences", href: "#experiences" },
  { name: "Dining", href: "#dining" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-xs border-b border-[#E7E4DC] py-3.5"
            : "bg-[#F8F6F0]/90 backdrop-blur-xs border-b border-[#E7E4DC]/60 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-[#78866B] rounded p-1"
            >
              <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-[#292B27] font-medium uppercase group-hover:text-[#414C38] transition-colors">
                The Verdant Haven
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#78866B] font-sans -mt-0.5">
                Heritage Sanctuary • Coorg
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[13px] tracking-[0.06em] uppercase font-medium text-[#292B27] hover:text-[#414C38] transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#78866B] transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-none text-xs uppercase tracking-[0.14em] font-medium bg-[#414C38] text-[#FFFFFF] hover:bg-[#323B2B] active:scale-[0.98] transition-all shadow-xs border border-[#414C38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#414C38]"
              >
                <CalendarDays className="w-3.5 h-3.5 text-[#E9E2D5]" />
                <span>Book Your Stay</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 text-[#292B27] hover:text-[#414C38] rounded focus:outline-none focus:ring-2 focus:ring-[#78866B]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[#292B27]/40 backdrop-blur-xs lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#FFFFFF] shadow-2xl flex flex-col lg:hidden border-l border-[#E7E4DC]"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-[#E7E4DC]">
                <div>
                  <span className="font-serif text-lg tracking-[0.15em] text-[#292B27] uppercase">
                    The Verdant Haven
                  </span>
                  <p className="text-[10px] tracking-[0.25em] text-[#78866B] uppercase">
                    Boutique Sanctuary
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 text-[#73766E] hover:text-[#292B27] rounded focus:outline-none focus:ring-2 focus:ring-[#78866B]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                <nav className="flex flex-col space-y-3">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 text-base tracking-wide text-[#292B27] hover:text-[#414C38] border-b border-[#E7E4DC]/50 font-medium"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#78866B]/60" />
                    </a>
                  ))}
                </nav>

                <div className="pt-6 space-y-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#414C38] text-white text-xs uppercase tracking-[0.15em] font-medium active:bg-[#323B2B] shadow-xs"
                  >
                    <CalendarDays className="w-4 h-4 text-[#E9E2D5]" />
                    <span>Book Your Stay</span>
                  </button>

                  <div className="p-4 bg-[#F8F6F0] border border-[#E7E4DC] text-xs space-y-2">
                    <p className="text-[#73766E] uppercase tracking-wider font-medium text-[11px]">
                      Reservations Concierge
                    </p>
                    <a
                      href="tel:+918272234500"
                      className="flex items-center gap-2 text-[#292B27] font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#78866B]" />
                      <span>+91 8272 234 500</span>
                    </a>
                    <p className="text-[#73766E] text-[11px]">Daily 8:00 AM – 10:00 PM IST</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

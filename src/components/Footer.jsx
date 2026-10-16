"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, Compass } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#292B27] text-[#E9E2D5] border-t border-[#414C38]/40 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#414C38]/60">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl tracking-[0.16em] uppercase text-white block">
              The Verdant Haven
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-[#78866B]">
              Heritage Boutique Sanctuary • Coorg
            </p>
            <p className="text-xs sm:text-sm text-[#E9E2D5]/70 font-light leading-relaxed max-w-sm pt-2">
              An intimate eighteen-suite retreat nestled across forty acres of private coffee plantations and cloud forests in the Western Ghats.
            </p>
            <div className="pt-2 text-xs text-[#E9E2D5]/50 italic">
              *Notice: Prototype hospitality website for demo purposes. Details subject to hotel operator confirmation.
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E9E2D5]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/#experiences" className="hover:text-white transition-colors">
                  Experiences & Spa
                </Link>
              </li>
              <li>
                <Link href="/#dining" className="hover:text-white transition-colors">
                  Dining & Cellar
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition-colors">
                  Visual Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Accommodations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">
              Suites & Villas
            </h4>
            <ul className="space-y-2 text-xs text-[#E9E2D5]/80">
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Deluxe Garden Room (45 sq.m)
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Premium Heritage Suite (72 sq.m)
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Plantation Family Suite (95 sq.m)
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  The Presidential Sanctuary (120 sq.m)
                </Link>
              </li>
              <li>
                <Link href="/#experiences" className="hover:text-white transition-colors">
                  Ayurvedic Wellness Pavilion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Concierge */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">
              Estate Concierge
            </h4>
            <div className="space-y-2 text-xs text-[#E9E2D5]/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#78866B] shrink-0 mt-0.5" />
                <span>Estate Road 4, Valley View Reserve, Madikeri, Coorg 571201, India</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#78866B] shrink-0" />
                <a href="tel:+918272234500" className="hover:text-white transition-colors">
                  +91 8272 234 500
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#78866B] shrink-0" />
                <a href="mailto:reservations@theverdanthaven.com" className="hover:text-white transition-colors">
                  reservations@theverdanthaven.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Verdant Haven on Instagram"
                className="w-8 h-8 rounded-none border border-[#414C38] flex items-center justify-center text-[#E9E2D5] hover:text-white hover:border-[#78866B] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Verdant Haven on Facebook"
                className="w-8 h-8 rounded-none border border-[#414C38] flex items-center justify-center text-[#E9E2D5] hover:text-white hover:border-[#78866B] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal and Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9E2D5]/60 font-light">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© 2026 The Verdant Haven Luxury Boutique Hotel.</span>
            <a href="#home" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#home" className="hover:text-white transition-colors">
              Cancellation Policy
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#E9E2D5]/80 hover:text-white transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

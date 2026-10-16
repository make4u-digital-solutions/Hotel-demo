"use client";

import { Phone, Mail, MessageSquare, Calendar } from "lucide-react";

export default function BookingAssistance({ onOpenBooking }) {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF] border-t border-b border-[#E7E4DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F6F0] border border-[#E7E4DC] p-8 sm:p-12 lg:p-14 text-center space-y-6 shadow-xs">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#78866B] font-semibold block mb-2">
              Personalized Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292B27] font-normal">
              Not Sure Which Room Is Right for You?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#73766E] font-light max-w-2xl mx-auto leading-relaxed">
            Our estate concierge is available daily to assist with personalized room recommendations, multi-suite family itineraries, dietary arrangements, and chauffeured airport transfers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
            <a
              href="tel:+918272234500"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] border border-[#E7E4DC] hover:border-[#414C38] text-xs uppercase tracking-wider font-medium text-[#292B27] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#78866B]" />
              <span>Call Concierge: +91 8272 234 500</span>
            </a>

            <a
              href="mailto:reservations@theverdanthaven.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] border border-[#E7E4DC] hover:border-[#414C38] text-xs uppercase tracking-wider font-medium text-[#292B27] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#78866B]" />
              <span>Email Reservations Desk</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#414C38] hover:bg-[#323B2B] text-white text-xs uppercase tracking-wider font-medium transition-colors border border-[#414C38]"
            >
              <Calendar className="w-4 h-4 text-[#E9E2D5]" />
              <span>Online Reservation Enquiry</span>
            </button>
          </div>

          <p className="text-xs text-[#73766E]/80 pt-2 italic">
            Desk hours: Daily 8:00 AM – 10:00 PM IST • Direct booking privilege guarantee applies.
          </p>
        </div>
      </div>
    </section>
  );
}

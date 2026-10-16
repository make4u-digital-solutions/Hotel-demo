"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, CalendarCheck, ArrowRight, ShieldAlert } from "lucide-react";

export const OFFERS_DATA = [
  {
    id: "weekend-escape",
    title: "Highland Weekend Escape",
    subtitle: "2 Nights of Uninterrupted Calm",
    description: "Arrive on Friday to chilled estate sparkling infusion. Includes curated daily breakfasts, afternoon plantation high tea, and 2:00 PM late checkout.",
    benefits: ["Complimentary Gourmet Breakfast", "Sunset High Tea Ritual", "Guaranteed 2:00 PM Late Checkout"],
    validity: "Valid on Friday–Sunday stays through current season",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "extended-stay",
    title: "Extended Seclusion Privilege",
    subtitle: "Stay 4 Nights, Experience Deeper Rest",
    description: "Immerse in the peaceful rhythm of the hills. Enjoy 20% savings on suite rates, daily bespoke laundry service, and private chauffeur transfer.",
    benefits: ["20% Privilege on Room Rates", "One-Way Luxury SUV Airport Transfer", "Daily Complimentary Laundry"],
    validity: "Minimum 4 consecutive nights stay",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "wellness-retreat",
    title: "Ayurvedic & Culinary Immersion",
    subtitle: "A Holistic Mind & Palate Reset",
    description: "Designed for couples seeking restoration. Features two bespoke 90-minute Ayurvedic treatments, herb garden foraging, and an intimate four-course dinner.",
    benefits: ["Two 90-min Signature Spa Treatments", "Four-Course Private Garden Dinner", "Botanical Bath Preparation in Suite"],
    validity: "Available year-round with advance reservation",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function SpecialOffers({ onClaimOffer }) {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-[#78866B] font-semibold block mb-2">
            Seasonal Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292B27] font-normal">
            Special Stays & Privileges
          </h2>
          <p className="text-sm sm:text-base text-[#73766E] font-light mt-3">
            Handcrafted itineraries and seasonal packages tailored for direct bookings.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[#78866B] bg-[#F8F6F0] px-3 py-1 border border-[#E7E4DC]">
            <Sparkles className="w-3.5 h-3.5 text-[#A7895C]" />
            <span>Sample Seasonal Offers • Direct Booking Advantages</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS_DATA.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-[#F8F6F0] border border-[#E7E4DC] flex flex-col justify-between hover:border-[#78866B]/60 transition-colors"
            >
              <div>
                <div className="relative aspect-[16/11] overflow-hidden bg-[#E9E2D5]">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-[#414C38] border border-[#E7E4DC]">
                    Sample Package
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#292B27] group-hover:text-[#414C38] transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#78866B] font-medium mt-1">
                      {offer.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#73766E] font-light leading-relaxed">
                    {offer.description}
                  </p>

                  <div className="pt-2 border-t border-[#E7E4DC] space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#292B27] block">
                      Included Privileges:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#73766E]">
                      {offer.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#78866B]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <p className="text-[11px] text-[#73766E] italic mb-4">{offer.validity}</p>
                <button
                  type="button"
                  onClick={() => onClaimOffer(offer)}
                  className="w-full py-2.5 px-4 bg-[#FFFFFF] hover:bg-[#414C38] hover:text-white text-[#292B27] text-xs uppercase tracking-wider font-medium border border-[#E7E4DC] hover:border-[#414C38] transition-colors flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Enquire This Package</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

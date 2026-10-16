"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Mountain, UtensilsCrossed } from "lucide-react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: HeartHandshake,
      title: "Thoughtful Hospitality",
      description:
        "Intuitive and discreet care designed around your pace—never rushed, never formal, always genuinely attentive.",
    },
    {
      icon: ShieldCheck,
      title: "Comfort-Focused Suites",
      description:
        "Engineered for deep rest with acoustic insulation, custom herbal mattresses, and breathable organic fabrics.",
    },
    {
      icon: Mountain,
      title: "Secluded Highland Location",
      description:
        "Tucked within 40 private acres at 3,800 ft elevation, surrounded by ancient canopies and pristine mountain breezes.",
    },
    {
      icon: UtensilsCrossed,
      title: "Estate-Grown Gastronomy",
      description:
        "Daily harvests from our organic gardens paired with time-honored recipes and artisanal estate coffee roasts.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.26em] text-[#78866B] font-semibold block mb-2">
            The Haven Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292B27] font-normal">
            Why Our Guests Return
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-[#FFFFFF] p-7 border border-[#E7E4DC] flex flex-col justify-between space-y-4 shadow-xs hover:border-[#78866B]/60 transition-colors"
            >
              <div className="w-10 h-10 bg-[#F8F6F0] border border-[#E7E4DC] flex items-center justify-center text-[#414C38]">
                <item.icon className="w-5 h-5 text-[#78866B]" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#292B27] font-medium mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#73766E] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

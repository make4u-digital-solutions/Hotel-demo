"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPAnimations() {
  useEffect(() => {
    // Only run in browser and when user has not requested reduced motion
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Gentle reveal for section headings
      const headings = document.querySelectorAll("h2");
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0.8, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Subtle parallax on hero background on desktop only
      if (window.innerWidth >= 1024) {
        gsap.to("#home img", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => {
      ctx.revert(); // Complete GSAP cleanup on unmount
    };
  }, []);

  return null;
}

"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin for scrolling animations
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    // Reveal text elements on load
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
    });

    // Parallax effect: Image moves slower than scroll
    gsap.to(".hero-image", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070" 
          alt="Luxury Event" 
          className="hero-image w-full h-[120%] object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0a0a0a]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h2 className="hero-text text-accent uppercase tracking-[0.4em] text-xs mb-4">
          Elite Event Curation
        </h2>
        <h1 className="hero-text text-6xl md:text-8xl font-bold tracking-tighter leading-none">
          AUREVIA <br /> 
          <span className="text-outline">EXPERIENCES</span>
        </h1>
        <div className="hero-text mt-10">
          <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 uppercase text-[10px] tracking-widest">
            Explore the Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Preloader({ onComplete }) {
  const container = useRef(null);
  const scanner = useRef(null);
  const textContainer = useRef(null);
  const logoRef = useRef(null);       

  useGSAP(() => {
    const allTexts = gsap.utils.toArray("text", container.current);
    const baseText = allTexts[0];
    const goldText = allTexts[1];

    const tl = gsap.timeline({ onComplete: () => onComplete() });

    // STEP 1: Initial reveal
    tl.fromTo([baseText, goldText],
      {
        opacity: 0,
        y: 40,
        letterSpacing: "0.5em"
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out"
      }
    )

      // STEP 2: Character magnetism
      .to([baseText, goldText], {
        letterSpacing: "-0.05em",
        duration: 1.5,
        ease: "expo.inOut",
      }, "-=0.2")

      // STEP 3: Gold fill reveal
      .to(goldText, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.8,
        ease: "power2.inOut",
      }, "-=0.8")

      // STEP 3b: Logo breathe — starts alongside gold reveal
      .fromTo(logoRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
        }, "<"                          
      )

      // STEP 3c: Logo continuous breathe loop
      .to(logoRef.current, {
        scale: 1.08,
        duration: 0.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,        
      })
      // STEP 4: Scanner swipe
      .to(scanner.current, {
        y: "-100%",
        duration: 1.5,
        ease: "expo.inOut",
      }, "+=0.3")

      // STEP 5: Remove loader
      .to(container.current, {
        y: "-100%",
        duration: 1.2,
        ease: "expo.inOut",
      }, "<0.2");

  }, { scope: container });

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808] overflow-hidden"
    >
      {/* MAIN CONTENT — logo + text stacked */}
      <div
        ref={textContainer}
        className="flex flex-col items-center gap-0 select-none w-full px-8"
      >

        {/* LOGO IMAGE */}
        <img
          ref={logoRef}              
          src="/logo.png"
          alt="Aurevia Logo"
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          style={{ opacity: 0 }}      
        />

        {/* SVG TEXT */}
        <svg
          viewBox="0 0 800 80"
          width="100%"
          style={{ overflow: "visible", marginTop: "-80px" }}
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--gold-stop-1)" />
              <stop offset="15%" stopColor="var(--gold-stop-2)" />
              <stop offset="30%" stopColor="var(--gold-stop-3)" />
              <stop offset="50%" stopColor="var(--gold-stop-4)" />
              <stop offset="70%" stopColor="var(--gold-stop-3)" />
              <stop offset="85%" stopColor="var(--gold-stop-2)" />
              <stop offset="100%" stopColor="var(--gold-stop-1)" />
            </linearGradient>
          </defs>

          {/* BASE LAYER: Faint white */}
          <text
            x="50%"
            y="100"
            textAnchor="middle"
            fontFamily="inherit"
            fontWeight="700"
            fontSize="50"
            fill="rgba(255,255,255,0.12)"
          >
            AUREVIA
          </text>

          {/* GOLD LAYER */}
          <text
            x="50%"
            y="100"
            textAnchor="middle"
            fontFamily="inherit"
            fontWeight="700"
            fontSize="50"
            fill="url(#goldGrad)"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            AUREVIA
          </text>
        </svg>

      </div>

      {/* SCANNER */}
      <div
        ref={scanner}
        className="absolute top-full left-0 w-full h-full z-[110]"
        style={{
          background: "linear-gradient(to top, #ffb6c1, #e6e6fa)",
          boxShadow: "0px -40px 100px rgba(255, 182, 193, 0.5)"
        }}
      />
    </div>
  );
}
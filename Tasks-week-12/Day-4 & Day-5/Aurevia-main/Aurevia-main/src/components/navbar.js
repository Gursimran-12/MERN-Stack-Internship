"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });
  }, { scope: navRef });

  return (
    <nav ref={navRef} className="fixed w-full z-50 py-6 px-10 flex justify-between items-center">
      <Link href="/" className="nav-item text-2xl font-bold tracking-tighter">
        AUREVIA<span className="text-accent">.</span>
      </Link>
      
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="#about" className="nav-item text-xs uppercase tracking-widest text-gray-400 hover:text-white">About</Link>
        <Link href="#services" className="nav-item text-xs uppercase tracking-widest text-gray-400 hover:text-white">Services</Link>
        <Link href="#contact" className="nav-item bg-white text-black px-5 py-2 text-xs font-bold uppercase flex items-center gap-2">
          Let's Talk <ArrowUpRight size={14} />
        </Link>
      </div>
    </nav>
  );
}
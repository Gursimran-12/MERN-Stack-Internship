"use client";
import React, { useState } from 'react';
import Preloader from '@/components/preloader';
import Hero from '@/components/hero';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative">
      {/* Show Preloader only when loading */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Content only becomes visible after loading */}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Hero />
        <section className="h-screen bg-black" />
      </div>
    </main>
  );
}
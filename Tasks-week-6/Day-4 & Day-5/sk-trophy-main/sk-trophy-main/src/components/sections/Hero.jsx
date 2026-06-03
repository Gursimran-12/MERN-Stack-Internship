import { useState, useEffect } from "react";
import img1 from "../../assets/trophy.jpg";
import img2 from "../../assets/trophy2.jpg";
import img3 from "../../assets/trophy3.jpg";

export default function Hero() {
  const slides = [
    {
      img: img1,
      imgAlt: "Golden trophy design",
      small: "DISCOVER THE ART",
      big: "Discover a New Level of Timeless Designs",
    },
    {
      img: img2,
      imgAlt: "Precision–crafted award",
      small: "CRAFTED WITH PRECISION",
      big: "Awards Designed to Inspire Excellence",
    },
    {
      img: img3,
      imgAlt: "Trophy celebrating accomplishments",
      small: "MAKE EVERY MOMENT SPECIAL",
      big: "Celebrate Achievements the Right Way",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header role="banner" className="w-full flex flex-col items-center">
      <section className="relative w-full h-[590px] overflow-hidden" aria-label="Hero Banner Slider">

        <figure className="w-full h-full">
          <img
            src={slides[index].img}
            alt={slides[index].imgAlt}
            className="w-full h-full object-cover"
          />
        </figure>

        <article
          key={index}
          className="
            absolute inset-0 flex flex-col items-center justify-center
            text-white text-center px-4
            transition-all duration-700
            opacity-0 translate-y-4
            animate-[fadeUp_0.7s_ease_forwards]
          "
        >
          <p className="text-sm tracking-[2px] mb-3">{slides[index].small}</p>

          <h1 className="text-5xl font-semibold leading-tight max-w-4xl">
            {slides[index].big}
          </h1>

          <button
            className="mt-6 px-8 py-3 bg-white text-black rounded-full shadow hover:bg-black hover:text-white transition"
            aria-label="Shop Trophy Designs"
          >
            Shop Designs
          </button>
        </article>

        <nav
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3"
          aria-label="Slider Navigation"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`
                h-1 rounded-full transition-all duration-300
                ${index === i ? "bg-white w-8" : "bg-white/50 w-6"}
              `}
            />
          ))}
        </nav>

      </section>
    </header>
  );
}
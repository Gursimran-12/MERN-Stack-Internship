import { useState, useEffect } from "react";
import Heading from "../ui/Heading";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Rating from "../ui/Rating";
import useInView from "../../hooks/useInView";

export default function Testimonial() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  const messages = [
    {
      name: "Riya Sharma",
      feedback: "I am amazed with the products and their delivery services",
      rating: 4.5,
    },
    { name: "Name 2", feedback: "Feedback here", rating: 4.5 },
    { name: "Name 3", feedback: "Feedback here", rating: 4.5 },
    { name: "Name 4", feedback: "Feedback here", rating: 4.5 },
    { name: "Name 5", feedback: "Feedback here", rating: 4.5 },
    { name: "Name 6", feedback: "Feedback here", rating: 4.5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === messages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? messages.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 py-10
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <header className="text-center mb-6">
        <Heading
          title="Our Customer Say!"
          description="Our customers adore our products, and we constantly aim to delight them."
        />
      </header>

      <section
        className="max-w-[1450px] mx-auto bg-gray-300 text-black rounded-lg shadow-md"
        role="region"
        aria-live="polite"
      >
        <div className="px-6 py-8 flex items-center justify-between">
          
          {/* Left Button */}
          <nav aria-label="Previous testimonial">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <HiOutlineChevronLeft size={24} />
            </button>
          </nav>

          {/* Testimonial Content */}
          <article
            key={currentIndex}
            className="
              text-center max-w-xl mx-auto
              transition-all duration-500 transform
              opacity-0 translate-x-10
              animate-[slideLeft_0.5s_ease-out_forwards]
            "
          >
            <p className="text-2xl font-semibold mb-2">
              {messages[currentIndex].name}
            </p>
            <p className="text-sm mb-3">
              {messages[currentIndex].feedback}
            </p>

            {/* Rating component */}
            <Rating value={messages[currentIndex].rating} />
          </article>

          {/* Right Button */}
          <nav aria-label="Next testimonial">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <HiOutlineChevronRight size={24} />
            </button>
          </nav>

        </div>
      </section>
    </section>
  );
}
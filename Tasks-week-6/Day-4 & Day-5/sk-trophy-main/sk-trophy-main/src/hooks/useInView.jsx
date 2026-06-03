import { useEffect, useRef, useState } from "react";

export default function useInView(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}
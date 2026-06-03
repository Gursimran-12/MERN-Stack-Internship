import Instagram1 from "../../assets/instagram1.jpg";
import Instagram2 from "../../assets/instagram2.jpg";
import Instagram3 from "../../assets/instagram3.jpg";
import Instagram4 from "../../assets/instagram4.jpg";
import Instagram5 from "../../assets/instagram5.jpg";
import Heading from "../ui/Heading";
import useInView from "../../hooks/useInView";
import ResponsiveGrid from "../utils/ResponsiveGrid";
import { Undo2, Box, Headphones, BadgePercent } from "lucide-react";

const instaImages = [
  Instagram1,
  Instagram2,
  Instagram3,
  Instagram4,
  Instagram5
];

export default function Instagram() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <section className="py-10">
        {/* calling the heading here */}
        <header>
          <Heading title={"Shop Instagram"} description={"Elevate the level of honouring now!"} />
        </header>
        <ResponsiveGrid cols={5}>
          {instaImages.map((img, i) => (
            <article
              key={i}
              className="text-center group overflow-hidden rounded-lg"
            >
              <img
                src={img}
                alt={`Instagram product ${i + 1}`}
                className="
                w-full h-[300px] object-cover mx-auto rounded-lg
                transition-transform duration-700
                group-hover:scale-105
              "
              />
            </article>
          ))}
        </ResponsiveGrid>

      </section>
    </section>
  );
}

export function Icons() {
  const icons = [
    { icon: Undo2, label: "Easy Returns", desc: "Risk-free Shopping with easy Returns" },
    { icon: Box, label: "Secure Packaging", desc: "No extra costs, just the price you see" },
    { icon: Headphones, label: "24/7 Support", desc: "24/7 Support, always here just for you" },
    { icon: BadgePercent, label: "Best Prices", desc: "Special Prices for our loyal customers" }
  ];
  const [ref, visible] = useInView({ threshold: 0.2 });
  return (
    <section
      ref={ref}
      className={`transition-all duration-700 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <section className="py-20">
        <ResponsiveGrid cols={4}>
          {icons.map(({ icon: Icon, label, desc }, index) => (
            <article
              key={index}
              className="flex flex-col justify-center items-center group"
            >
              <Icon className="w-10 h-10 transition-transform duration-200 group-hover:scale-110" />

              <h1 className="mt-2 text-[18px] font-medium opacity-80">
                {label}
              </h1>

              <p className="mt-2 text-[14px] opacity-80">
                {desc}
              </p>
            </article>
          ))}
        </ResponsiveGrid>

      </section>
    </section>
  );
}
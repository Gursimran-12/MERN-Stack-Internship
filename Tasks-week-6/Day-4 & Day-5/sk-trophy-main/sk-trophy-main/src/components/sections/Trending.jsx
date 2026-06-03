import Trending1 from "../../assets/trending1.jpg";
import Trending2 from "../../assets/trending2.jpg";
import Trending3 from "../../assets/trending3.jpg";
import Trending4 from "../../assets/trending4.jpg";
import Trending5 from "../../assets/trending5.jpg";
import Trending6 from "../../assets/trending6.jpg";
import Heading from "../ui/Heading"
import useInView from "../../hooks/useInView";
import ResponsiveGrid from "../utils/ResponsiveGrid";
import Card from "../utils/ProductCard"

const trendingProducts = [
  { img: Trending1, title: "Star Awards", rating: 4.5 },
  { img: Trending2, title: "Academic Trophies", rating: 4 },
  { img: Trending3, title: "Corporate Awards", rating: 3.5 },
  { img: Trending4, title: "Medals & Ribbons", rating: 5 },
];

export default function Products() {
  const [ref, visible] = useInView({ threshold: 0.2 });
  return (
    <section
      ref={ref}
      className={`transition-all duration-700 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <section className="py-10">

        <header>
          <Heading title={"Top Trending"} description={"Browse our Top Trending picks loved by all"} />
        </header>
        <ResponsiveGrid cols={4}>
          {trendingProducts.map((item, index) => (
            <Card key={index} img={item.img} title={item.title} rating={item.rating} height="h-[400px]" />
          ))}

        </ResponsiveGrid>
      </section>
    </section>
  );
}

export function ProductDisplay() {
  const images = [Trending5, Trending6];

  return (
    <section className="w-full grid grid-cols-2 items-center gap-2">

      {images.map((img, index) => (
        <article key={index}
          className="relative w-full h-[590px] overflow-hidden group">
          <img
            src={img}
            alt="Trending"
            className="
              w-full h-full object-cover 
              transition-transform duration-700 
              group-hover:scale-105
            "
          />
        </article>
      ))}

    </section>
  );
}
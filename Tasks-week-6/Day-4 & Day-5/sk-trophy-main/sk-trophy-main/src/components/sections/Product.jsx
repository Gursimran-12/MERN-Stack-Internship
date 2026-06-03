import Product1 from "../../assets/product1.jpg";
import Product2 from "../../assets/product2.jpg";
import Product3 from "../../assets/product3.jpg";
import Product4 from "../../assets/product4.jpg";
import Heading from "../ui/Heading";
import useInView from "../../hooks/useInView";
import ResponsiveGrid from "../utils/ResponsiveGrid";
import Card from "../utils/ProductCard"


const products = [
  { img: Product1, title: "Star Awards", rating: 4.5 },
  { img: Product2, title: "Academic Trophies", rating: 4 },
  { img: Product3, title: "Corporate Awards", rating: 3.5 },
  { img: Product4, title: "Medals & Ribbons", rating: 5 },
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
          <Heading title={"Today's Top Picks"} description={"Elevate the standard of Honouring"} />
        </header>

        <ResponsiveGrid cols={4}>

          {products.map((p, index) => (
            <Card img={p.img} title={p.title} rating={p.rating} />
          ))}

        </ResponsiveGrid>
      </section>
    </section>
  );
}
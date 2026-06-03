import { Link } from "react-router-dom";
import Shop1 from "../assets/shop1.jpg";
import Shop2 from "../assets/shop2.jpg";
import Shop3 from "../assets/shop3.jpg";
import Shop4 from "../assets/shop4.jpg";
import Shop5 from "../assets/shop5.jpg";
import Shop6 from "../assets/shop6.jpg";

import Breadcrumb from "../components/ui/Breadcrumb";
import ResponsiveGrid from "../components/utils/ResponsiveGrid";

const products = [
  { img: Shop1, title: "Shop1" },
  { img: Shop2, title: "Shop2" },
  { img: Shop3, title: "Shop3" },
  { img: Shop4, title: "Shop4" },
  { img: Shop5, title: "Shop5" },
  { img: Shop6, title: "Shop6" }
];

export default function StoreComp() {
  return (
    <main className="py-10">
      <Breadcrumb
        paths={[
          { label: "Home", to: "/" },
          { label: "Our shop" }
        ]}
      />

      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-[40px] font-medium py-2">Our Stores</h1>

        <p className="text-gray-500 text-[18px]">
          Explore our store locations, experience our collections <br />
          in person, and easily find the one that’s closest to you.
        </p>
      </header>

      {/* Grid here */}
      <ResponsiveGrid cols={3}>

        {products.map((p, index) => (
          <article
            key={index}
            className="text-center group cursor-pointer rounded-lg"
          >
            <figure className="overflow-hidden rounded-lg">
              <img
                src={p.img}
                alt={`Exterior view of ${p.title}`}
                className="
                  w-full h-[450px] object-cover mx-auto rounded-lg
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />
            </figure>

            <h3 className="my-3 font-medium text-2xl">{p.title}</h3>
          </article>
        ))}
      </ResponsiveGrid>

    </main>
  );
}
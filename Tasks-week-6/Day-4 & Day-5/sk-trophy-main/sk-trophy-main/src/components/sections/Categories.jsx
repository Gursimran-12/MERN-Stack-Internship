import category1 from "../../assets/category1.jpg";
import category2 from "../../assets/category2.jpg";
import category3 from "../../assets/category3.jpg";
import category4 from "../../assets/category4.jpg";
import category5 from "../../assets/category5.jpg";
import category6 from "../../assets/category6.jpg";
import ResponsiveGrid from "../utils/ResponsiveGrid";
import Heading from "../ui/Heading";
import useInView from "../../hooks/useInView";
import { Link } from "react-router-dom";

const categories = [
  { img: category1, title: "Star Awards" },
  { img: category2, title: "Academic Awards" },
  { img: category3, title: "Corporate Awards" },
  { img: category4, title: "Medals & Ribbons" },
  { img: category5, title: "Crystal Awards" },
  { img: category6, title: "Cup Trophies" },
];

export default function Categories() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <section className="py-10">
        <header>
          <Heading title={"Shop By Category"} description={"Top designs everyone talking about"} />
        </header>

        <ResponsiveGrid cols={6} >
        {categories.map((item, i) => (
          <article key={i} className="text-center group">
            <Link to="/prizes">
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-w-[220px] aspect-square rounded-full object-cover mx-auto transition duration-500 transform group-hover:scale-110 group-hover:rotate-1 "
              />
            </Link>

            <h3 className="mt-3 font-medium text-2xl">
              {item.title}
            </h3>
          </article>
        ))}

      </ResponsiveGrid>

    </section>
    </section >
  );
}
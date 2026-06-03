import Breadcrumb from "../components/ui/Breadcrumb";
import Prize1 from "../assets/prize1.jpg";
import Prize2 from "../assets/prize2.jpg";
import Prize3 from "../assets/prize3.jpg";
import Prize4 from "../assets/prize4.jpg";
import Prize5 from "../assets/prize5.jpg";
import Prize6 from "../assets/prize6.jpg";
import Prize7 from "../assets/prize7.jpg";
import Prize8 from "../assets/prize8.jpg";
import Prize9 from "../assets/prize9.jpg";
import Prize10 from "../assets/prize10.jpg";
import Prize11 from "../assets/prize11.jpg";
import Prize12 from "../assets/prize12.jpg";
import ResponsiveGrid from "../components/utils/ResponsiveGrid";


const products = [
  { img: Prize1, title: "Star Awards", rating: 4.5 },
  { img: Prize2, title: "Academic Trophies", rating: 4 },
  { img: Prize3, title: "Corporate Awards", rating: 3.5 },
  { img: Prize4, title: "Medals & Ribbons", rating: 5 },
  { img: Prize5, title: "Star Awards", rating: 4.5 },
  { img: Prize6, title: "Academic Trophies", rating: 4 },
  { img: Prize7, title: "Corporate Awards", rating: 3.5 },
  { img: Prize8, title: "Medals & Ribbons", rating: 5 },
  { img: Prize9, title: "Star Awards", rating: 4.5 },
  { img: Prize10, title: "Academic Trophies", rating: 4 },
  { img: Prize11, title: "Corporate Awards", rating: 3.5 },
  { img: Prize12, title: "Medals & Ribbons", rating: 5 },
];

export default function Prizecomp() {
  return (
    <main className="py-10">

      <Breadcrumb
        paths={[
          { label: "Home", to: "/" },
          { label: "Awards and Medals" }
        ]}
      />

      {/* Page Header */}
      <header className="text-center mb-10 px-4">
        <h1 className="text-[40px] font-semibold py-2">Awards and Medals</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Step into our Awards & Prizes Collection, where excellence meets recognition
          in pieces that celebrate every achievement with pride.
        </p>
      </header>

      {/* Product Grid */}
      <ResponsiveGrid cols={4}>

        {products.map((p, index) => (
          <Card key={index} img={p.img} title={p.title} rating={p.rating} height="h-[350px]" />
        ))}

      </ResponsiveGrid>

    </main>
  );
}
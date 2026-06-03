import { useState } from "react";

import AwardImg from "../assets/awardImg.jpg";

import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.jpg";
import Product4 from "../assets/product4.jpg";
import Card from "../components/utils/ProductCard";
import Breadcrumb from "../components/ui/Breadcrumb";
import ResponsiveGrid from "../components/utils/ResponsiveGrid";

const products = [
  { img: Product1, title: "Star Awards", rating: 4.5 },
  { img: Product2, title: "Academic Trophies", rating: 4 },
  { img: Product3, title: "Corporate Awards", rating: 3.5 },
  { img: Product4, title: "Medals & Ribbons", rating: 5 }
];

export default function PrizeDesc() {
  const [activeTab, setActiveTab] = useState("related");
  const [infoTab, setInfoTab] = useState("description");

  const relatedProducts = [
    { img: Product1, title: "Star Awards", rating: 4.5 },
    { img: Product2, title: "Academic Trophies", rating: 4 },
    { img: Product3, title: "Corporate Awards", rating: 3.5 },
    { img: Product4, title: "Medals & Ribbons", rating: 5 }
  ];

  const recentlyViewed = [
    { img: Product2, title: "Shield Trophies", rating: 4.2 },
    { img: Product3, title: "Honour Medals", rating: 3.8 },
    { img: Product1, title: "Winner Awards", rating: 4.9 },
    { img: Product4, title: "Premium Cups", rating: 4.6 }
  ];

  const visibleProducts = activeTab === "related" ? relatedProducts : recentlyViewed;

  return (
    <main className="py-10" role="main">

      <Breadcrumb
        paths={[
          { label: "Home", to: "/" },
          { label: "Academic Awards" }
        ]}
      />

      {/* Product Overview */}
      <section className="max-w-[1450px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        <figure>
          <img
            src={AwardImg}
            alt="Academic Award Trophy"
            className="w-[400px] h-[400px] object-cover mx-auto rounded-lg"
          />
        </figure>

        <article>
          <p className="text-gray-600 text-lg">Prizes and Awards</p>

          <h1 className="text-4xl font-medium">
            Academic Awards
          </h1>

          <Rating value={4.5} />

          <p className="text-3xl font-medium mt-7">Rs. 1000</p>

          <p className="mt-7 text-gray-600 leading-relaxed">
            Academic awards…
          </p>
        </article>

      </section>

      {/* Description */}
      <section className="max-w-[1450px] mx-auto px-6"
      >
        <h2 className="sr-only">Product Information Section</h2>

        {/* Tab Buttons */}
        <div className="flex gap-10 text-2xl font-semibold border-b border-gray-200 pb-4">

          <button
            onClick={() => setInfoTab("description")}
            className={`${infoTab === "description" ? "border-b-4 border-black pb-2" : "text-gray-400"}`}
          >
            Description
          </button>

          <button
            onClick={() => setInfoTab("reviews")}
            className={`${infoTab === "reviews" ? "border-b-4 border-black pb-2" : "text-gray-400"}`}
          >
            Customer Reviews
          </button>

        </div>

        {/* Tab content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Description Tab */}
          {infoTab === "description" && (
            <>
              <article id="description-panel">
                <h2 className="text-3xl font-semibold">Star Trophy</h2>
                <p>Description here.</p>
              </article>

              <article>
                <h2 className="text-3xl font-semibold">
                  Composition, Origin And Care Guidelines
                </h2>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  - Premium Metal Alloy <br />
                  - Designed in India <br />
                  - Origin: Punjab <br />
                  - Manufacture: SK Trophy, India <br />
                </p>
              </article>
            </>
          )}

          {/* Reviews Tab */}
          {infoTab === "reviews" && (
            <article
              className="col-span-2"
            >
              <p>Reviews here</p>
            </article>
          )}

        </div>
      </section>

      {/* Recently viewed */}
      <section
        className="max-w-[1450px] mx-auto px-6 py-16"
      >
        <h2 id="related-section-title">Related and Recently Viewed Products</h2>

        {/* Tabs */}
        <div className="flex gap-8 justify-center mb-12">
          <button
            onClick={() => setActiveTab("related")}
            className={`text-2xl font-semibold pb-2 ${activeTab === "related" ? "border-b-4 border-black" : "text-gray-400"}`}
          >
            Related Products
          </button>

          <button
            onClick={() => setActiveTab("recent")}
            className={`text-2xl font-semibold pb-2 ${activeTab === "recent" ? "border-b-4 border-black" : "text-gray-400"}`}
          >
            Recently Viewed
          </button>
        </div>

        {/* Product grid*/}
        <ResponsiveGrid cols={4}>

          {products.map((p, index) => (
            <Card key={index} img={p.img} title={p.title} rating={p.rating} />
          ))}
        </ResponsiveGrid>

      </section>

    </main>
  );
}
import Breadcrumb from "../components/ui/Breadcrumb";
import Awards from "../assets/awards.jpg";
import Award1 from "../assets/award1.jpg";
import AccordionItem from "../components/ui/accordionItem";

const stats = [
  {
    head: "8.2k",
    title: "Products Available",
    desc: "We offer a wide selection of high-quality products to meet every need"
  },
  {
    head: "10k",
    title: "Happy Customers",
    desc: "Serving over 10,000 delighted customers who trust us for quality and service"
  },
  {
    head: "96",
    title: "Partner Brands",
    desc: "Our top-brand partnerships bring a trusted collection"
  },
  {
    head: "16k",
    title: "Products for Sale",
    desc: "We strive to offer a diverse range of products that cater to all styles"
  }
];

export default function AboutComp() {
  return (
    <main className="py-10" role="main">

      <Breadcrumb
        paths={[
          { label: "Home", to: "/" },
          { label: "About Us" }
        ]}
      />

      {/* page header */}
      <header className="text-center mb-10">
        <h1 className="text-[40px] font-medium py-2">About Us</h1>

        <p className="text-gray-500 text-[18px]">
          With over 15 years of experience, we craft timeless collections that <br />
          transcend trends and inspire lasting elegance.
        </p>
      </header>

      {/* Figure section */}
      <figure className="w-[1450px] mx-auto">
        <img
          src={Awards}
          alt="Award collection displayed together"
          className="w-full h-full object-cover rounded-xl"
        />
        <figcaption className="sr-only">Award collection showcase</figcaption>
      </figure>

      {/* Introduction section */}
      <section className="max-w-[1450px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Design, Craftsmanship & Precision
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          From the first sketch to the final polish, every trophy we create is crafted
          with passion and precision. Our team carefully shapes, engraves, and finishes
          each piece to ensure it reflects the excellence it is meant to honor.
        </p>
      </section>

      {/* Statistics section */}
      <section className="max-w-[1450px] mx-auto mt-9 border-t border-gray-300
                   grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 
                   gap-8 px-5 pt-10" >
        <h2 id="statistics-title" className="sr-only">Company Statistics</h2>

        {stats.map((item, index) => (
          <article key={index} className="text-center cursor-pointer rounded-lg">
            <dl>
              <dt className="my-3 font-bold text-4xl">{item.head}</dt>
              <dd className="my-3 font-semibold text-xl">{item.title}</dd>
              <dd className="my-3 text-gray-500">{item.desc}</dd>
            </dl>
          </article>
        ))}
      </section>

      {/* Global Feature section */}
      <section className="max-w-[1450px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 p-10 bg-gray-50 rounded-3xl"
      >
        {/* Image */}
        <figure>
          <img
            src={Award1}
            alt="Handcrafted trophy being showcased"
            className="rounded-2xl w-full h-[500px] object-cover"
          />
          <figcaption className="sr-only">Crafted trophy close-up</figcaption>
        </figure>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-semibold mb-6 py-10">
            Offering Rare And Beautiful Items Worldwide
          </h2>

          <AccordionItem title="Introduction">
            We offer carefully curated specialty products sourced from around the world.
          </AccordionItem>

          <AccordionItem title="Our Vision">
            Our goal is to bring timeless, beautiful, and meaningful items to people everywhere.
          </AccordionItem>

          <AccordionItem title="What Sets Us Apart">
            We focus on authenticity, craftsmanship, and sustainable practices.
          </AccordionItem>

          <AccordionItem title="Our Commitment">
            We are committed to ethical sourcing and long-lasting customer relationships.
          </AccordionItem>
        </div>
      </section>

    </main>
  );
}
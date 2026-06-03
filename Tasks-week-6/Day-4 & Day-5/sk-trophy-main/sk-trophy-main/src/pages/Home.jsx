import AnnouncementBar, {Navbar} from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Categories from "../components/sections/Categories";
import Products from "../components/sections/Product";
import Trending, { ProductDisplay } from "../components/sections/Trending";
import Instagram, { Icons } from "../components/sections/Instagram";
import Feedback from "../components/sections/Testimonials";
import Footer from "../components/layout/Footer"

export default function Home() {
  return (
    <>
      {/* Page Header */}
      <header>
        <AnnouncementBar />
        <Navbar /> 
      </header>

      {/* Main Page Content */}
      <main>

        {/* Hero Section */}
        {/* Here we have added aria-labelledby for screen-reading */}
        <section aria-labelledby="hero-title">
          <Hero />
        </section>

        {/* Categories Section */}
        <section aria-labelledby="categories-title">
          <Categories />
        </section>

        {/* Products Section */}
        <section aria-labelledby="products-title">
          <Products />
        </section>

        {/* Trending Products Section */}
        <section aria-labelledby="trending-title">
          <Trending />
          <ProductDisplay />
        </section>

        {/* Testimonials */}
        <section aria-labelledby="testimonials-title">
          <Feedback />
        </section>

        {/* Instagram / Gallery */}
        <section aria-labelledby="instagram-title">
          <Instagram />
          <Icons />
        </section>

      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
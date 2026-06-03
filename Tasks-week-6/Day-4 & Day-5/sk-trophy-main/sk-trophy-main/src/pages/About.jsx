import AnnouncementBar, {Navbar} from "../components/layout/Header";
import Feedback from "../components/sections/Testimonials";
import Footer from "../components/layout/Footer";
import Aboutcomp from "../pageComponents/About";

export default function About() {
  return (
    <>
      {/* Page Header */}
      <header>
        <AnnouncementBar />
        <Navbar /> 
      </header>

      {/* Main Content */}
      <main>

        {/* About Section */}
        <section aria-labelledby="about-title">
          <Aboutcomp />
        </section>

        {/* Testimonials Section */}
        <section aria-labelledby="testimonials-title">
          <Feedback />
        </section>

      </main>

      {/* Page Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
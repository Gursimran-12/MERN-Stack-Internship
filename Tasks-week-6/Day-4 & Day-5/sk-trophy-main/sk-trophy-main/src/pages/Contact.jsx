import AnnouncementBar, {Navbar} from "../components/layout/Header";
import Contactcomp from "../pageComponents/Contact";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <>
      {/* Global Header Elements */}
      <AnnouncementBar />
      <Navbar />

      {/* Main Content */}
      <main>
        <section aria-labelledby="account-title">
          <Contactcomp />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
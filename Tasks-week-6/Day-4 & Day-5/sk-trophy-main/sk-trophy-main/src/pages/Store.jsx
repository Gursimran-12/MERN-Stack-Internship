import AnnouncementBar, {Navbar} from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import StoreComp from "../pageComponents/Store";

export default function Store() {
  return (
    <>
      {/* Global Header Elements */}
      <AnnouncementBar />
      <Navbar />

      {/* Main Content */}
      <main>
        <section aria-labelledby="account-title">
          <StoreComp />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
import AnnouncementBar, {Navbar} from "../components/layout/Header";
import PrizeDesccomp from "../pageComponents/Prizes";
import Footer from "../components/layout/Footer";

export default function PrizeDesc() {
  return (
    <>
      {/* Global Header Elements */}
      <AnnouncementBar />
      <Navbar />

      {/* Main Content */}
      <main>
        <section aria-labelledby="account-title">
          <PrizeDesccomp />

        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
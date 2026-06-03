import AnnouncementBar, {Navbar} from "../components/layout/Header";
import Prizecomp from "../pageComponents/PrizeDetails";
import Footer from "../components/layout/Footer"

export default function Prizes() {
  return (
    <>
      {/* Global Header Elements */}
      <AnnouncementBar />
      <Navbar />

      {/* Main Content */}
      <main>
        <section>
          <Prizecomp />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
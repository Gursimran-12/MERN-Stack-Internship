import AnnouncementBar, {Navbar} from "../components/layout/Header";
import Accountcomp from "../pageComponents/Account";
import Footer from "../components/layout/Footer";

export default function Account() {
  return (
    <>
      {/* Page Header */}
      <header>
        <AnnouncementBar />
        <Navbar /> 
      </header>

      {/* Main Content */}
      <main>
        
        <section aria-labelledby="account-title">
          <Accountcomp />
        </section>

      </main>

      {/* Page Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
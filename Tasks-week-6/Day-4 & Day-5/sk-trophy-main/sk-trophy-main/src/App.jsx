import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Account from "./pages/Account";
import Prizes from "./pages/Prizes";
import PrizeDesc from "./pages/PrizeDetails";
import ScrollToTop from "./components/layout/ScrollTop";

function App() {
  return (
    <>
        <ScrollToTop />   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/account" element={<Account />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="/prizeDesc" element={<PrizeDesc />} />
        </Routes>
    </>
  );
}

export default App;
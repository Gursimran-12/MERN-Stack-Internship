import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import trophyLogo from "../../assets/sktrophy.png";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import ResponsiveGrid from "../utils/ResponsiveGrid";
import Product1 from "../../assets/product1.jpg";
import Product2 from "../../assets/product2.jpg";
import Product3 from "../../assets/product3.jpg";
import Product4 from "../../assets/product4.jpg";
import Card from "../utils/ProductCard"


import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const products = [
  { img: Product1, title: "Star Awards", rating: 4.5 },
  { img: Product2, title: "Academic Trophies", rating: 4 },
  { img: Product3, title: "Corporate Awards", rating: 3.5 },
  { img: Product4, title: "Medals & Ribbons", rating: 5 },
];

const menuItems = [
  {
    name: "Home",
    dropdown: [
      { label: "Home", path: "/" },
    ],
  },
  {
    name: "Shop",
    dropdown: [
      { label: "Trophies", path: "/trophies" },
      { label: "Medals", path: "/medals" },
      { label: "Awards", path: "/awards" },
      { label: "Custom Orders", path: "/custom-orders" },
    ],
  },
  {
    name: "Product",
    dropdown: [
      { label: "New Arrivals", path: "/new-arrivals" },
      { label: "Best Sellers", path: "/best-sellers" },
      { label: "Discounted Items", path: "/discounts" },
    ],
  },
  {
    name: "Pages",
    dropdown: [
      { label: "About Us", path: "/about" },
      { label: "Contact Us", path: "/contact" },
      { label: "Our Store", path: "/store" },
      { label: "My Account", path: "/account" },
    ],
  },
];

// Function for Annoucement Bar

function AnnouncementBar() {
  const messages = [
    "Get 20% OFF on Bulk Trophy Orders!",
    "Custom Engraving Available on All Trophies!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  function nextSlide() {
    setCurrentIndex((prev) =>
      prev === messages.length - 1 ? 0 : prev + 1
    );
  }

  function prevSlide() {
    setCurrentIndex((prev) =>
      prev === 0 ? messages.length - 1 : prev - 1
    );
  }

  return (
    <aside
      className="bg-black text-white text-sm"
      role="alert"
      aria-live="polite"
    >
      <div className="max-w-[700px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* Navigation Buttons */}
        <nav aria-label="Announcement Slider Navigation" className="flex items-center gap-3">

          <button
            onClick={prevSlide}
            aria-label="Previous Announcement"
            className="font-bold"
          >
            <HiOutlineChevronLeft size={20} />
          </button>

        </nav>

        {/* Message */}
        <article
          key={currentIndex}
          className="
            text-center text-base
            transition-all duration-500 transform
            opacity-0 translate-x-10
            animate-[slideLeft_0.5s_ease-out_forwards]
          "
        >
          <p>{messages[currentIndex]}</p>
        </article>

        <nav aria-label="Announcement Slider Navigation" className="flex items-center gap-3">

          <button
            onClick={nextSlide}
            aria-label="Next Announcement"
            className="font-bold"
          >
            <HiOutlineChevronRight size={20} />
          </button>

        </nav>

      </div>
    </aside>
  );
}

// Function for Navbar

function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Search states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  // Redirect user to Prizes page when searching
  const handleSearch = () => {
    if (searchText.trim() !== "") {
      navigate("/prizes", { state: { query: searchText } });
      setIsSearchOpen(false);
      setSearchText("");
    }
  };

  return (
    <header className="w-full py-3 shadow sticky top-0 bg-white z-50">
      <nav className="max-w-[1450px] mx-auto px-4 grid grid-cols-3 items-center font-bold ">

        {/* LEFT */}
        <div className="flex items-center gap-4 ">
          {/* Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpenMobile(!openMobile)}
          >
            <GiHamburgerMenu />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-9 text-black font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer flex items-center gap-1 hover:underline hover:text-red-500">
                {item.name}
                <RiArrowDownSLine className="text-xl transition-transform duration-200 group-hover:rotate-180" />

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg  rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3 z-50">
                  <ul className="space-y-1">
                    {item.dropdown.map((drop, i) => (
                      <li key={i}>
                        <Link to={drop.path} className="text-gray-600 text-sm hover:text-black hover:underline block py-3">
                          {drop.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Center — Logo */}
        <div className="flex justify-center">
          <img src={trophyLogo} alt="Logo" className="w-14 h-14 object-contain" />
        </div>

        {/* Right */}
        <ul className="flex space-x-9 text-black font-medium justify-end items-center">

          {/* Open Search Modal */}
          <li>
            <IoSearch className="cursor-pointer text-2xl hover:text-red-500" onClick={() => setIsSearchOpen(true)} />
          </li>

          <Link to="/account">
            <FaUser className="cursor-pointer text-2xl hover:text-red-500" />
          </Link>
        </ul>
      </nav>

      {/* -------------- Search Modal -------------- */}
      {isSearchOpen && (
        <>

          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] absolute"
            onClick={() => setIsSearchOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 overflow-y-auto flex justify-center items-start mt-20 z-[100]">
            <div className="bg-white w-[90%] max-w-[1200px] rounded-2xl p-10 relative shadow-xl max-h-[85vh] overflow-y-auto">

              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-3xl"
                onClick={() => setIsSearchOpen(false)}
              >
                ✕
              </button>

              <h1 className="text-4xl font-semibold mb-6">Search</h1>

              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Search products…"
                  className="w-full border rounded-xl p-4 text-xl"
                />

                <IoSearch
                  className="absolute right-5 top-4 text-2xl cursor-pointer"
                  onClick={handleSearch}
                />
              </div>

              {/* Feature Keywords */}
              <h2 className="text-2xl font-semibold mb-4 p-4">Feature Keywords Today</h2>

              <div className="flex flex-wrap gap-4 mb-12">
                {["Prizes", "Awards", "Trophies", " Medals"].map((keyword, i) => (
                  <button
                    key={i}
                    className="px-5 py-2 border rounded-full bg-white hover:bg-black hover:text-white transition"
                    onClick={() => {
                      setSearchText(keyword);
                      navigate("/prizes", { state: { query: keyword } });
                      setIsSearchOpen(false);
                    }}
                  >
                    {keyword}
                  </button>
                ))}
              </div>
              <ResponsiveGrid cols={4}>

                {products.map((p, index) => (
                  <Card img={p.img} title={p.title} rating={p.rating} height="h-[450px]" />
                ))}

            </ResponsiveGrid>
          </div>
        </div>
    </>
  )
}

{/* Mobile Menu */ }
{
  openMobile && (
    <div className="md:hidden bg-white shadow-lg p-4 space-y-4 font-medium">
      {menuItems.map((item, index) => (
        <div key={index}>
          <button
            className="w-full flex justify-between items-center text-left"
            onClick={() =>
              setOpenDropdown(openDropdown === index ? null : index)
            }
          >
            <span>{item.name}</span>
            <RiArrowDownSLine
              className={`transition-transform duration-200 ${openDropdown === index ? "rotate-180" : ""}`}
            />
          </button>

          {/* Mobile Dropdown */}
          {openDropdown === index && (
            <div className="mt-2 ml-4 p-3 border-l border-gray-300">
              <ul className="space-y-1">
                {item.dropdown.map((drop, i) => (
                  <li key={i}>
                    <Link
                      to={drop.path}
                      className="text-gray-700 text-sm block py-1"
                      onClick={() => setOpenMobile(false)}
                    >
                      {drop.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
    </header >
  );
}

export default AnnouncementBar;
export { Navbar };
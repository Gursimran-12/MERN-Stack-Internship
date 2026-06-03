import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import trophyLogo from "../../assets/sktrophy.png";

export default function Footer() {
    return (
        <footer className="mx-auto bg-white border-t border-gray-300 pt-16 pb-10">

            {/* Top Grid */}
            <div className="max-w-[1350px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-6">

                {/* Brand */}
                <div>
                    <div className="flex justify-left">
                        <img
                            src={trophyLogo}
                            alt="Logo"
                            className="w-14 h-14 object-contain"
                        />
                    </div>

                    <p className="mt-4">600 N Michigan Ave, Chicago, IL 60611, USA</p>

                    <a href="#" className="text-red-500 underline text-sm">
                        Open in Maps
                    </a>

                    <p className="mt-3">hi.amerce@gmail.com</p>
                    <p className="mt-1">315–666–6688</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-5">
                        <SocialIcon icon={<FaFacebookF />} />
                        <SocialIcon icon={<FaInstagram />} />
                        <SocialIcon icon={<FaSnapchatGhost />} />
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-3">COMPANY</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="hover:text-red-500">About Us</a></li>
                        <li><a href="#" className="hover:text-red-500">Our Stores</a></li>
                        <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
                        <li><a href="#" className="hover:text-red-500">New Arrivals</a></li>
                        <li><a href="#" className="hover:text-red-500">My Account</a></li>
                        <li><a href="#" className="hover:text-red-500">Best Sellars</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold mb-3">NEWSLETTER</h3>
                    <p className="text-gray-700">
                        Subscribe for store updates and discounts.
                    </p>

                    {/* Input */}
                    <div className="flex items-center mt-4 border border-gray-100 rounded-full px-4 h-12 bg-gray-50">
                        <input
                            type="email"
                            placeholder="Enter your e-mail"
                            className="bg-transparent w-full outline-none"
                        />
                        <button
                            type="submit"
                            className="ml-3 bg-red-500 text-white px-5 py-2 rounded-full text-sm hover:bg-red-600 transition-all"
                        >
                            Subscribe
                        </button>
                    </div>

                    <p className="text-sm text-gray-600 mt-3">
                        By clicking subscribe, you agree to the{" "}
                        <a href="#" className="underline">Terms of Service</a>{" "}
                        and{" "}
                        <a href="#" className="underline">Privacy Policy</a>.
                    </p>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="max-w-[1350px] mx-auto pt-10 mt-10 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4 px-6">

                {/* Country Selector (simple placeholder) */}
                <div className="flex items-center gap-3">
                    <span> India </span>
                </div>

                {/* Copyright */}
                <p className="text-gray-600 text-sm">
                    All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

/* Reusable Social Icon Button */
function SocialIcon({ icon }) {
    return (
        <div className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">
            {icon}
        </div>
    );
}
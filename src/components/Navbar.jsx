import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-white shadow-md fixed w-full z-50 top-0">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / Site Adı */}
                <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide">
                    Azerbaijan Guide
                </Link>

                {/* Menü Linkleri */}
                <nav className="flex space-x-8 text-gray-700 text-sm font-medium">
                    <a href="#cities" className="hover:text-blue-600 transition">Cities</a>
                    <a href="#cuisine" className="hover:text-blue-600 transition">Cuisine</a>
                    <a href="#things" className="hover:text-blue-600 transition">Activities</a>
                    <a href="#gallery" className="hover:text-blue-600 transition">Gallery</a>
                    <a href="#testimonials" className="hover:text-blue-600 transition">Reviews</a>
                    <a href="#map" className="hover:text-blue-600 transition">Map</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

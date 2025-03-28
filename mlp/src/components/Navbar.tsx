import { useState } from "react";

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="relative flex justify-between items-center p-4">
        
        {/* Logo Section (Left) */}
        <div className="flex items-center text-xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10003/10003800.png"
            alt="Devtol Logo"
            className="w-6 h-6 mr-2"
          />
          Devtol
        </div>

        {/* Navbar Items (Centered) */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-7 text-xl">
            <li>
              <a href="#products" className="hover:text-blue-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#enterprise" className="hover:text-blue-500 transition">
                Enterprise
              </a>
            </li>
            <li>
              <a href="#use-case" className="hover:text-blue-500 transition">
                Use Case
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-500 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:text-blue-500 transition">
                Docs
              </a>
            </li>
          </ul>
        </nav>

        {/* Buttons (Right) */}
        <div className="hidden lg:flex space-x-4">
          <button className="bg-gray-200 py-2 px-5 rounded-3xl transition hover:bg-gray-300">
            Book Demo
          </button>
          <button className="bg-blue-500 text-white py-2 px-5 rounded-3xl transition hover:bg-blue-600">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="lg:hidden block text-gray-700"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg ">
            <li>
              <a href="#products" className="hover:text-blue-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#enterprise" className="hover:text-blue-500 transition">
                Enterprise
              </a>
            </li>
            <li>
              <a href="#use-case" className="hover:text-blue-500 transition">
                Use Case
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-500 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:text-blue-500 transition">
                Docs
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center space-y-2 pb-4">
            <button className="bg-gray-200 py-2 px-5 rounded-3xl transition hover:bg-gray-300">
              Book Demo
            </button>
            <button className="bg-blue-500 text-white py-2 px-5 rounded-3xl transition hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50 shadow-md">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center text-xl">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10003/10003800.png"
            alt="Devtol Icon"
            className="w-6 h-6 mr-2"
          />
          Devtol
        </div>
        <button
          className="lg:hidden block text-gray-700"
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
        <nav className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-7">
            <li>
              <a href="#products" className="hover:text-blue-500">
                Products
              </a>
            </li>
            <li>
              <a href="#enterprise" className="hover:text-blue-500">
                Enterprise
              </a>
            </li>
            <li>
              <a href="#use-case" className="hover:text-blue-500">
                Use Case
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:text-blue-500">
                Docs
              </a>
            </li>
          </ul>
          <div className="flex ml-4">
            <button className="mr-2 bg-gray-200 py-2 px-5 rounded-3xl">
              Book Demo
            </button>
            <button className="bg-blue-500 text-white py-2 px-5 rounded-3xl">
              Get Started
            </button>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#products" className="hover:text-blue-500">
                Products
              </a>
            </li>
            <li>
              <a href="#enterprise" className="hover:text-blue-500">
                Enterprise
              </a>
            </li>
            <li>
              <a href="#use-case" className="hover:text-blue-500">
                Use Case
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:text-blue-500">
                Docs
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center space-y-2 pb-4">
            <button className="bg-gray-200 py-2 px-5 rounded-3xl">
              Book Demo
            </button>
            <button className="bg-blue-500 text-white py-2 px-5 rounded-3xl">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
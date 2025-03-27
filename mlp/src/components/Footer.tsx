const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="https://cdn-icons-png.flaticon.com/128/10003/10003800.png" alt="Devtol Logo" className="w-10 h-10 mr-2" />
          <span className="text-xl font-bold">Devtol</span>
        </div>
        <nav className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0 md:ml-14">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Learn</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
          <a href="#" className="hover:text-gray-400">Pricings</a>
          <a href="#" className="hover:text-gray-400">Docs</a>
        </nav>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook Icon" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Facebook Icon" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="Facebook Icon" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="Facebook Icon" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="https://cdn-icons-png.flaticon.com/128/15059/15059942.png" alt="Facebook Icon" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="Facebook Icon" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 pt-4 my-6 mx-10">
        <p>Copyright © Devtol Agency | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
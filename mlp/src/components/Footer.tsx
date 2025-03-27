const Footer = () => {
  return (
    <footer className="bg-purple-200 text-center py-20">
      <div className="my-10">
        <h2 className="text-5xl font-semibold">Starting with Devtol is <br/> simple, fast, and free.</h2>
        <div className="flex justify-center space-x-4 mt-10 mb-20">
          <button className="bg-white text-black py-3 px-8 rounded-full">Book Demo</button>
          <button className="bg-blue-500 text-white py-3 px-8 rounded-full">Get Started</button>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="https://via.placeholder.com/40" alt="Devtol Logo" className="w-10 h-10 mr-2" />
            <span className="text-xl font-bold">Devtol</span>
          </div>
          <nav className="space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Learn</a>
            <a href="#" className="hover:text-gray-400">Blog</a>
            <a href="#" className="hover:text-gray-400">Pricings</a>
            <a href="#" className="hover:text-gray-400">Docs</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-4 mt-4">
          <p>Copyright © Devtol Agency | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
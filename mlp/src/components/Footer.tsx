const Footer = () => {
  return (
    // Footer section with a dark background and white text
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/128/10003/10003800.png" 
            alt="Devtol Logo" 
            className="w-10 h-10 mr-2"
          />
          <span className="text-xl font-bold">Devtol</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0 md:ml-14">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Learn</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
          <a href="#" className="hover:text-gray-400">Pricing</a>
          <a href="#" className="hover:text-gray-400">Docs</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          {/* Facebook */}
          <a href="#" className="hover:text-gray-400">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" 
              alt="Facebook Icon" 
              className="w-6 h-6"
            />
          </a>
          {/* Twitter */}
          <a href="#" className="hover:text-gray-400">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" 
              alt="Twitter Icon" 
              className="w-6 h-6"
            />
          </a>
          {/* LinkedIn */}
          <a href="#" className="hover:text-gray-400">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/174/174855.png" 
              alt="LinkedIn Icon" 
              className="w-6 h-6"
            />
          </a>
          {/* Instagram */}
          <a href="#" className="hover:text-gray-400">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" 
              alt="Instagram Icon" 
              className="w-6 h-6"
            />
          </a>
          {/* GitHub */}
          <a href="#" className="hover:text-gray-400">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/15059/15059942.png" 
              alt="GitHub Icon" 
              className="w-6 h-6"
            />
          </a>
          {/* YouTube */}
          <a href="#" className="hover:text-gray-400">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" 
              alt="YouTube Icon" 
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center border-t border-gray-700 pt-4 my-6 mx-10">
        <p>Copyright © Devtol Agency | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

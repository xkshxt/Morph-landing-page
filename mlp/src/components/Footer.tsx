// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="text-center">
        <p>© 2025 Devtool Agency. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Us</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// src/components/Header.tsx

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold">MORPH</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
      <div>
        <button className="mr-2 bg-gray-200 p-2 rounded">Book Demo</button>
        <button className="bg-blue-500 text-white p-2 rounded">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
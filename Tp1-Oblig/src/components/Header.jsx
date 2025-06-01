import { useState } from 'react';
import { navItems } from '../utils/navItems';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">MyPost</div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-blue-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={isMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

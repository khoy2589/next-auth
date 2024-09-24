import React from "react";
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">GameStore</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Games
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <ShoppingCart className="h-6 w-6 cursor-pointer" />
          <User className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;

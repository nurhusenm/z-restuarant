// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black-800 p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          -- Zara --
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 ${
            isOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="text-white hover:text-gray-300">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
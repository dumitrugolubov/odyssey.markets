import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center py-2 text-sm border-b">
          <div className="flex items-center space-x-4">
            <button className="hover:text-blue-600">RU</button>
            <button className="hover:text-blue-600">EN</button>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">ODYSSEY EXCHANGE</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/about" className="hover:text-blue-600">О бирже</Link>
            <Link to="/trading" className="hover:text-blue-600">Торговля</Link>
            <Link to="/fees" className="hover:text-blue-600">Комиссии</Link>
            <Link to="/contact" className="hover:text-blue-600">Контакты</Link>
          </nav>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
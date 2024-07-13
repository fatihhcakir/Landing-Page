import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="./logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">Video <span className="text-indigo-600">AI</span></span>
        </div>

        <nav className="flex-1">
          <ul className="flex justify-center space-x-4">
            <li><a href="#useCase" className="hover:text-gray-400">Use Case</a></li>
            <li><a href="#feature" className="hover:text-gray-400">Feature</a></li>
            <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
            <li><a href="#resources" className="hover:text-gray-400">Resources</a></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#login" className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700">Login</a>
          <a href="#signup" className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700">Signup</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

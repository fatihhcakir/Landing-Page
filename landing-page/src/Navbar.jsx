
import React from "react";
import './App.css'; // Tailwind CSS sınıflarını içerecek şekilde

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Logo</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white">Link 1</a>
          <a href="#" className="text-white">Link 2</a>
          <a href="#" className="text-white">Link 3</a>
          {/* Diğer bağlantılar */}
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white">Login</a>
          <a href="#" className="text-white">Signup</a>
        </div>
      </div>
    </nav>
  );

}

export default Navbar;

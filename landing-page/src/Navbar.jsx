
const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-300 to-purple-300 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="./logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">Video <span className="text-indigo-600">AI</span></span>
        </div>

        <nav className="flex-1">
          <ul className="flex justify-center space-x-4">
            <li><a href="#useCase" className="font-bold text-black hover:text-gray-400">Use Case</a></li>
            <li><a href="#feature" className="font-bold text-black hover:text-gray-400">Feature</a></li>
            <li><a href="#pricing" className="font-bold text-black hover:text-gray-400">Pricing</a></li>
            <li><a href="#resources" className="font-bold text-black hover:text-gray-400">Resources</a></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-400">Login</button>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-400">Signup</button>
        </div>
      </div>
    </header>   
  );
};

export default Navbar;

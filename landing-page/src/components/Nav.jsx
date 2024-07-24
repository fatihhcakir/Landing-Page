import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex-1">
      <div className="flex justify-between items-center p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul className={`lg:flex lg:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white lg:bg-transparent lg:static lg:flex-row lg:space-x-4 lg:justify-center`}>
          <li>
            <a
              href="#useCase"
              className="block lg:inline font-bold text-black transition hover:text-indigo-400 p-2"
            >
              Use Case
            </a>
          </li>
          <li>
            <a
              href="#feature"
              className="block lg:inline font-bold text-black transition hover:text-indigo-400 p-2"
            >
              Feature
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="block lg:inline font-bold text-black transition hover:text-indigo-400 p-2"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#resources"
              className="block lg:inline font-bold text-black transition hover:text-indigo-400 p-2"
            >
              Resources
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

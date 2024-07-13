function Nav() {
  return (
    <nav className="flex-1">
      <ul className="flex justify-center space-x-4">
        <li>
          <a
            href="#useCase"
            className="font-bold text-black transition hover:text-indigo-400"
          >
            Use Case
          </a>
        </li>
        <li>
          <a
            href="#feature"
            className="font-bold text-black transition hover:text-indigo-400"
          >
            Feature
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="font-bold text-black transition hover:text-indigo-400"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#resources"
            className="font-bold text-black transition hover:text-indigo-400"
          >
            Resources
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

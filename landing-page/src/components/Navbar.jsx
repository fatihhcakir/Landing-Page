import LoginButtons from "./LoginButtons";
import Logo from "./Logo";
import Nav from "./Nav";
const Navbar = () => {
  return (
    <header className="text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Logo />
        <Nav />
        <LoginButtons />;
      </div>
    </header>
  );
};

export default Navbar;

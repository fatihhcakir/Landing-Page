// import Buttons from "./Buttons";
import Logo from "./Logo";
// import Nav from "./Nav";
const Navbar = () => {
  return (
    <header className="text-white md:flex invisible">
      <div className="container mx-auto flex justify-center items-center pt-8 pr-16">
        <Logo />
        {/* <Nav />
        <Buttons title="LOGIN" title2="SIGN UP" />; */}
      </div>
    </header>
  );
};

export default Navbar;

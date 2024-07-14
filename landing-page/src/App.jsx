import Navbar from "./components/Navbar";
import Body from "./components/Body";
import FooterMain from "./components/FooterMain";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <>
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2/3 mx-auto justify-center h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-md filter blur-3xl opacity-50 -z-50 flex flex-col min"></div>
      <div className="h-screen flex flex-col space-y-24">
        <Navbar />
        <Body />
        <FooterMain />
        <HowItWorks/>
      </div>
    </>
  );
}

export default App;

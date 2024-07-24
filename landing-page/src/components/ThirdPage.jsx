import ai from "/ai.jpg";
import Buttons from "./Buttons";

const ThirdPage = () => {
  return (
    <div className="relative flex flex-col lg:flex-row">
      <div className="flex-1 lg:w-1/2 lg:ml-20 lg:pl-12 lg:pt-12 p-4 flex flex-col justify-center">
        <div>
          <h1 className="text-3xl lg:text-5xl text-black mb-8">
            Create amazing content <br /> with AI technology.
          </h1>
          <p className="text-gray-500 mb-8">
            AI opens up various opportunities to improve video quality to <br /> make it more interesting, informative, and memorable.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 flex flex-col lg:flex-row lg:space-x-4">
          <Buttons
            title="Start for free"
            title2="Learn more"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 lg:pl-8 lg:pt-12 lg:mb-0">
        <div className="w-full bg-gradient-to-b from-pink-200 to-white rounded-lg p-6">
          <img src={ai} className="w-full h-auto rounded-lg" alt="AI" />
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;

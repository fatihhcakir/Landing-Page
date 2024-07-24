import Buttons from "./Buttons";
import Circles from "./Circles";

const Body = () => {
  return (
    <div className="flex flex-col space-y-8 p-4 sm:p-6 md:p-8">
      <Circles />
      <div className="flex flex-col space-y-2 items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-4 sm:mb-6 lg:mb-8">
          Make short videos from <br /> long ones instantly
        </h1>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
          <p>
            Create social ready short clips from your long videos with AI & Save
            %90 time and effort
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Buttons
          title="Start for free"   
          title2="Play demo video"
        />
      </div>

      <div className="text-center text-gray-600">
        <p className="text-sm sm:text-base md:text-lg">
          Get 75 mins of upload for free every month
        </p>
      </div>
    </div>
  );
};

export default Body;

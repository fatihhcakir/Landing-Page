import Buttons from "./Buttons";
import Circles from "./Circles";

const Body = () => {
  return (
    <body className="flex flex-col space-y-8">
      <Circles />
      <div className="flex flex-col space-y-2 items-center justify-center text-7xl text-black">
        <h1 className=" text-7xl text-black text-center mb-8 ">
          Make short videos from <br /> long ones instantly
        </h1>
        <div className="flex items-center justify-center text-xl text-gray-600">
          <p>
            Create social ready short clips from your long videos with AI & Save
            %90 time and effort
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4">
          <Buttons
           title="Start for free"   
           title2="Play demo video"
           />
      </div>
      <div className="flex items-center justify-center space-x-4 text-gray-600">
        <p>Get 75 mins of upload for free every month</p>
      </div>
    </body>
  );
};
export default Body;

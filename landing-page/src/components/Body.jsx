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
        <div className="bg-transparent border border-black transition	 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-400">
          <button>Start for free</button>
        </div>
        <div className="bg-black transition text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-400">
          <button>Play demo Video</button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 text-gray-600">
        <p>Get 75 mins of upload for free every month</p>
      </div>
    </body>
  );
};
export default Body;

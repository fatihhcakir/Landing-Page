// eslint-disable-next-line react/prop-types
function Buttons({ title, title2 }) {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <button className="bg-white transition border border-black text-black px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-indigo-400">
        {title}
      </button>
      <button className="bg-black transition text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-indigo-400">
        {title2}
      </button>
    </div>
  );
}

export default Buttons;

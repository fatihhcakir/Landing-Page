// eslint-disable-next-line react/prop-types
function Buttons({ title, handleSubmit }) {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <button
        onClick={handleSubmit}
        className="bg-white transition border border-black text-black px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-indigo-400"
      >
        {title}
      </button>
    </div>
  );
}

export default Buttons;

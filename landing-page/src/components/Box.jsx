// eslint-disable-next-line react/prop-types
const Box = ({ imageSrc, title, description }) => {
  return (
    <div className="w-full sm:w-80 md:w-96 h-auto bg-gradient-to-b from-pink-200 to-white rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 flex flex-col justify-center items-center">
      <img className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-lg" src={imageSrc} alt={title} />
      <div className="mt-4 text-center">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Box;

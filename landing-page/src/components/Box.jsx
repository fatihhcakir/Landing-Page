import React from "react";

// eslint-disable-next-line react/prop-types
const Box = ({ imageSrc, title, description }) => {
  return (
    <div className="w-96 h-96 bg-gradient-to-b from-pink-200 to-white rounded-lg p-6 mb-10 flex flex-col justify-center items-center">
      <img className="w-2/3 h-2/3 object-cover rounded-lg" src={imageSrc} alt={title} />
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Box;

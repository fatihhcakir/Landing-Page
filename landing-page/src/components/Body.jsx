import Buttons from "./Buttons";
import Circles from "./Circles";
import { useState } from "react";

const Body = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Email successfully sent to the backend!");
      } else {
        console.log("Failed to send email to the backend.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex flex-col w-full space-y-8 p-4 sm:p-6 md:p-8 justify-center items-center max-w-full pt-64">
      <Circles />
      <div className="flex flex-col space-y-2 items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-4 sm:mb-6 lg:mb-8">
          Make short videos from <br /> long ones instantly
        </h1>
        <div className="text-sm sm:text-base md:text-lg px-6 lg:text-xl text-gray-600">
          <p>
            Create social ready short clips from your long videos with AI & Edit
            and Save
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center md:space-x-2 md:space-y-0 space-y-8">
        <div className="relative justify-center items-center flex">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Buttons handleSubmit={handleSubmit} title="GET STARTED" />
      </div>
      <div className="text-center text-gray-600">
        <p className="text-sm sm:text-base md:text-lg">
          Please free to contact us 😃
        </p>
      </div>
    </div>
  );
};

export default Body;

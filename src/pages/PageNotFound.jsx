import React from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#141414] text-white min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="flex justify-center mb-4">
          <h1 className="text-[80px] sm:text-[100px] md:text-[120px] text-[#952e75]">
            <BsEmojiFrown />
          </h1>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#952e75] mb-2">
          Page not found
        </h1>
        <p className="text-gray-400 mb-4 text-base sm:text-lg">
          The page you are looking for doesn't exist or another error occurred.
        </p>
        <p className="text-gray-400 text-base sm:text-lg">
          <button
            className="text-white underline hover:text-[#952e75] transition duration-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Go back
          </button>
          , or head over to{" "}
          <button
            className="text-white underline hover:text-[#952e75] transition duration-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            adeel-por.netlify.app
          </button>{" "}
          to choose a new direction.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;

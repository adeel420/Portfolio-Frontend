import React from "react";
import { assets5 } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-[#141414] text-white">
      <h1 className="text-center text-4xl md:text-5xl font-semibold mt-3">
        About Me
      </h1>

      {/* Flex container with responsive adjustments */}
      <div className="flex flex-col md:flex-row items-center md:justify-between mt-6">
        {/* Image Section */}
        <div className="img bg-[#141414] flex justify-center">
          <div className="gradient-border bg-[#141414]">
            <img
              src={assets5.myPic}
              className="w-[250px] md:w-[350px] h-auto rounded-lg"
              alt="Profile"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-[50%] text-center md:text-left mt-6 md:mt-0 px-4">
          <h1 className="text-3xl md:text-5xl">
            My Name Is{" "}
            <b className="text-[rgba(150,46,118,1)]">
              Adeel <span className="text-[rgba(79,43,167,1)]">Imran</span>
            </b>{" "}
          </h1>
          <p className="text-[gray] mt-4 md:mt-5 text-base md:text-lg">
            I am a passionate MERN stack web developer with 2 years of
            experience. I have acquired the skills and knowledge necessary to
            make your project a success. I enjoy every step of the design
            process, from discussion and collaboration to implementation.
          </p>

          {/* Contact Me Button */}
          <button
            className="mt-5 text-black bg-white px-4 py-2 text-lg font-bold w-[150px] cursor-pointer transition-all hover:bg-transparent hover:border hover:border-white hover:text-white"
            onClick={() => navigate("#contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

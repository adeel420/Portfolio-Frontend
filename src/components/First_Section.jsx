import React, { useEffect } from "react";
import Typed from "typed.js";
import { assets } from "../assets/assets";
import { MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const First_Section = () => {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["Video Editor", "Web Developer."],
      typeSpeed: 60,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col-reverse lg:flex-row text-white justify-between items-center px-6 md:px-12 lg:px-20 py-10">
      {/* Left Side Content */}
      <div className="w-full lg:w-[48%] flex flex-col justify-center items-start gap-4 text-center lg:text-left">
        <button className="button text-white px-4 py-2 rounded-md text-sm md:text-base">
          Welcome to my Portfolio
        </button>

        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
          Hi! I am a skilled <span id="element"></span>
        </h1>

        <p className="text-[#959595] text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa et ab
          nisi vitae fugit! Quisquam, numquam adipisci. Temporibus, possimus?
          Beatae sunt libero assumenda quibusdam cupiditate animi, laboriosam,
          repellendus atque corrupti explicabo tempora.
        </p>

        <Link
          to={"Adeel Imran - Resume.pdf"}
          target="_blank"
          className="flex items-center justify-center gap-2 mt-4 text-[black] bg-white p-2 text-[16px] md:text-[18px] font-bold pl-[30px] pr-[30px] cursor-pointer hover:bg-transparent hover:border hover:border-white hover:text-[white]"
        >
          Download Resume <MdDownload />
        </Link>
      </div>

      {/* Right Side Image */}
      <div className="w-full lg:w-[45%] flex justify-center items-center">
        <motion.img
          src={assets.mainImage}
          className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] object-cover rounded-lg shadow-lg"
          alt="Profile"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default First_Section;

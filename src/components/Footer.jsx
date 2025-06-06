import React from "react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f0f0f] p-4 flex justify-between items-center">
      <div className="">
        <a href="#" className="-m-1.5 p-1.5 text-white">
          <h1 className="text-white text-2xl font-bold">Personal Portfolio</h1>
        </a>
      </div>
      <div className="hidden lg:flex text-white ml-22 items-center gap-3">
        <Link
          to={"https://www.linkedin.com/in/adeel-imran-532a84328/"}
          className="hover:bg-[white] hover:text-[black] cursor-pointer text-white bg-[#232323] border border-white rounded-full p-2"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to={"https://www.facebook.com/profile.php?id=61551033714157"}
          className="hover:bg-[white] hover:text-[black] cursor-pointer text-white bg-[#232323] border border-white rounded-full p-2"
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          to={"https://www.instagram.com/adeelimran89/"}
          className="hover:bg-[white] hover:text-[black] cursor-pointer text-white bg-[#232323] border border-white rounded-full p-2"
          target="_blank"
        >
          <IoLogoInstagram />
        </Link>
        <Link
          to={"https://github.com/adeel420?tab=repositories"}
          className="hover:bg-[white] hover:text-[black] cursor-pointer text-white bg-[#232323] border border-white rounded-full p-2"
          target="_blank"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Button, Popover, Space } from "antd";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { handleError, handleSuccess } from "../utils/Utils";
import axios from "axios";
import Model from "./Model";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };

  const handleLogout = () => {
    handleSuccess("Logout Successfuly");
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/user/login-data`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  const content = (
    <div className="w-[150px] ">
      {user.role === 1 && (
        <a
          href="/dashboard"
          style={{ color: "black" }}
          className="dash-link hover:bg-[#ccc] p-2 cursor-pointer text-black flex gap-2 items-center text-[18px] font-semibold rounded "
        >
          <MdDashboard /> Dashboard
        </a>
      )}
      <li
        onClick={handlePopup}
        style={{ color: "black" }}
        className="dash-link hover:bg-[#ccc] p-2 cursor-pointer text-black flex gap-2 items-center text-[18px] font-semibold rounded "
      >
        <FaUser /> Profile
      </li>
      <li
        className="hover:bg-[#ccc] p-2 cursor-pointer flex gap-2 items-center text-[18px] font-semibold rounded "
        onClick={handleLogout}
      >
        <MdLogout /> Logout
      </li>
    </div>
  );

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#141414]" : "bg-transparent"
      } text-white`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 text-white">
            <h1 className="text-white text-2xl font-bold">
              Personal Portfolio
            </h1>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          <a
            href="/"
            className="text-sm font-semibold text-white hover:text-[#952e75] "
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-semibold text-white hover:text-[#952e75] "
          >
            About Me
          </a>
          <a
            href="#skills"
            className="text-sm font-semibold text-white hover:text-[#952e75] "
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-semibold text-white hover:text-[#952e75] "
          >
            Projects
          </a>
          {!token && (
            <>
              <a
                href="/login"
                className="text-sm font-semibold text-white hover:text-[#952e75] "
              >
                Login
              </a>
              <a
                href="/signup"
                className="text-sm font-semibold text-white hover:text-[#952e75] "
              >
                Signup
              </a>
            </>
          )}
        </div>

        {/* Social Media Icons */}
        <div className="hidden lg:flex text-white ml-22 items-center gap-2">
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

        <div className="hidden lg:flex lg:gap-12 items-center lg:flex-1 lg:justify-end">
          {token && (
            <>
              <Popover
                content={content}
                trigger="click"
                className="cursor-pointer text-white text-[22px] bg-[#952e75] border border-white rounded-full p-2 h-[60px] w-[60px] flex items-center justify-center "
              >
                {user?.name?.charAt(0)}
              </Popover>
            </>
          )}
          <Link
            to="Adeel Imran - Resume.pdf"
            className="text-sm hover:bg-[white] hover:text-[black] flex items-center gap-2 font-semibold text-white border p-4 w-[140px] flex items-center justify-center"
            target="_blank"
          >
            Resume <MdDownload />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#141414] text-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <a
              href="/"
              className="block text-lg font-semibold text-white hover:bg-gray-700 p-2 rounded-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-lg font-semibold text-white hover:bg-gray-700 p-2 rounded-lg"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="block text-lg font-semibold text-white hover:bg-gray-700 p-2 rounded-lg"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block text-lg font-semibold text-white hover:bg-gray-700 p-2 rounded-lg"
            >
              Projects
            </a>
            {!token ? (
              <>
                <a
                  href="/login"
                  className="block text-lg font-semibold text-white hover:bg-gray-700 p-2 rounded-lg"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="block text-lg font-semibold text-white hover:bg-gray-700 p-2 rounded-lg"
                >
                  Signup
                </a>
              </>
            ) : (
              <Popover
                content={content}
                trigger="click"
                className="cursor-pointer text-white text-[22px] bg-[#952e75] border border-white rounded-full p-2 h-[60px] w-[60px] flex items-center justify-center "
              >
                {user?.name?.charAt(0)}
              </Popover>
            )}
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              to={"https://www.linkedin.com/in/adeel-imran-532a84328/"}
              className="hover:bg-[white] hover:text-[black] cursor-pointer text-white bg-[#232323] border border-white rounded-full p-3 cursor-pointer"
              target="_blank"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=61551033714157"}
              className="hover:bg-[white] hover:text-[black] cursor-pointer text-white bg-[#232323] border border-white rounded-full p-3 cursor-pointer"
              target="_blank"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              to={"https://www.instagram.com/adeelimran89/"}
              className="hover:bg-[white] hover:text-[black] cursor-pointer text-white bg-[#232323] border border-white rounded-full p-3 cursor-pointer"
              target="_blank"
            >
              <IoLogoInstagram size={20} />
            </Link>
            <Link
              to={"https://github.com/adeel420?tab=repositories"}
              className="hover:bg-[white] hover:text-[black] cursor-pointer text-white bg-[#232323] border border-white rounded-full p-3 cursor-pointer"
              target="_blank"
            >
              <FaGithub size={20} />
            </Link>
          </div>

          <div className="mt-6">
            <Link
              to="Adeel Imran - Resume.pdf"
              className="block hover:bg-[white] hover:text-[black] flex items-center justify-center gap-2 text-center text-lg font-semibold text-white border p-3 rounded-lg hover:bg-gray-700"
              target="_blank"
            >
              Resume <MdDownload />
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
      <div
        className="fixed inset-0 z-50 bg-[#00000079] flex items-center justify-center bg-opacity-50 px-4"
        style={{ display: openPopup ? "block" : "none" }}
      >
        <div
          className="bg-white absolute top-[50%] left-[50%] flex flex-col dark:bg-black p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <button
            className="self-end text-2xl cursor-pointer "
            onClick={handlePopup}
          >
            &times;
          </button>
          <Model />
        </div>
      </div>
    </header>
  );
}

import { assets1 } from "../assets/assets";
import { assets2 } from "../assets/assets";
import { assets3 } from "../assets/assets";
import { assets4 } from "../assets/assets";
import { MdCreateNewFolder } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export const skillsData = [
  { id: 0, img: assets1.meter1, title: "HTML" },
  { id: 0, img: assets1.meter3, title: "CSS" },
  { id: 0, img: assets1.meter2, title: "JavaScript" },
  { id: 0, img: assets1.meter1, title: "Tailwind CSS" },
  { id: 0, img: assets1.meter3, title: "React-Js" },
  { id: 0, img: assets1.meter2, title: "Node-Js" },
  { id: 0, img: assets1.meter2, title: "Express-Js" },
  { id: 0, img: assets1.meter2, title: "MongoDB" },
  { id: 0, img: assets1.meter1, title: "Wordpress" },
];

export const projects1 = [
  { id: 1, src: assets2.image1, title: "Ecommece Website" },
  { src: assets2.image2, title: "Blog Website" },
  { src: assets2.image3, title: "Chat Application" },
  { src: assets2.image4, title: "Taxfiler Website" },
  { src: assets2.image5, title: "Twitter Clone" },
  { src: assets2.image6, title: "Currency Converter" },
];

export const projects2 = [
  { id: 1, src: assets3.image7, title: "Drag and Drop" },
  { src: assets3.image8, title: "Music Player" },
  { src: assets3.image9, title: "Personal Portfolio" },
  { src: assets3.image10, title: "Quote Generator" },
  { src: assets3.image11, title: "Tic-Tac-Toe" },
  { src: assets3.image12, title: "To-do List" },
];

export const projects3 = [
  { id: 1, src: assets4.image13, title: "Weather App" },
  { src: assets4.image14, title: "Text to Speech Converter" },
  { src: assets4.image15, title: "Web-Tech" },
  { src: assets4.image16, title: "Dictionary Website" },
  { src: assets4.image17, title: "Landing Page" },
  { src: assets4.image18, title: "Landing Page" },
];

export const dashboardTabs = [
  { id: 0, logo: FaUsers },
  { id: 1, logo: MdCreateNewFolder },
  { id: 2, logo: MdOutlineBrowserUpdated },
  { id: 3, logo: FaUser },
  { id: 4, logo: MdLogout },
];

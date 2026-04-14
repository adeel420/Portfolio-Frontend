import React from "react";
import { assets5 } from "../assets/assets";

const Sticky_Logo = () => {
  const phoneNumber = "923209430934";
  const message =
    "Hi! I am a professional web developer. I can help you build modern and responsive websites. Let’s discuss your project.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 z-50 cursor-pointer animate-bounce md:bottom-8 md:right-8"
    >
      <img
        src={assets5.whatsapp}
        alt="WhatsApp"
        className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
      />
    </a>
  );
};

export default Sticky_Logo;

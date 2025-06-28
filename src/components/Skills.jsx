import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { skillsData } from "../data/Data";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 }, // Keeping this unchanged
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 }, // Adjusted for better tablet responsiveness
    items: 2,
    partialVisibilityGutter: 30, // Adds spacing for smooth transition
  },
  mobile: {
    breakpoint: { max: 768, min: 480 }, // Adjusted for large mobile screens
    items: 1,
    partialVisibilityGutter: 20,
  },
  smallMobile: {
    breakpoint: { max: 480, min: 0 }, // Separate case for very small screens
    items: 1,
  },
};

const Skills = () => {
  return (
    <div
      className="flex flex-col w-[90%] absolute left-[50%] rounded-[40px] text-white bg-[#141414] pb-8 p-2 shadow-2xl"
      style={{ transform: "translateX(-50%)" }}
    >
      <h1 className="text-center text-5xl font-semibold mt-3">Skills</h1>
      <p
        className="text-center text-[gray] mt-4 w-[80%] relative left-[50%]"
        style={{ transform: "translateX(-50%)" }}
      >
        Here are the technologies and tools I use to build efficient, scalable,
        and modern web applications.
      </p>

      {/*  Carousel */}
      <div className="mt-9">
        <Carousel responsive={responsive}>
          {skillsData.map((data) => (
            <div className="flex flex-col items-center gap-2" key={data.id}>
              <img src={data.img} alt="" />
              <h4 className="text-2xl">{data.title}</h4>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;

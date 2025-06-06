import React, { useEffect } from "react";
import First_Section from "../components/First_Section";
import { assets } from "../assets/assets";
import Header from "./../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${assets.banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <div className="pt-24">
          <First_Section />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-[#141414] text-white pt-20 ">
        <About />
      </div>

      {/* Skills Section */}
      <div
        id="skills"
        className="pt-20"
        style={{
          backgroundColor: "#111111",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px",
        }}
      >
        <Skills />
      </div>

      {/* Projects Section */}
      <div id="projects" className="bg-[#000000] pb-12 pt-20">
        <Projects />
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        style={{
          background:
            "linear-gradient(90deg, rgba(150,46,118,1) 24%, rgba(79,43,167,1) 65%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Contact />
      </div>
    </>
  );
};

export default Home;

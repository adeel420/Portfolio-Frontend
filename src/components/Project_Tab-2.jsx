import React, { useEffect, useState } from "react";
import { projects2 } from "../data/Data";
import { IoMdOpen } from "react-icons/io";
import axios from "axios";

const Project_Tab2 = () => {
  const [projects, setProjects] = useState([]);

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/project/`
      );
      setProjects(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);
  return (
    <div className="mt-12">
      {projects.slice(6, 12).length > 0 ? (
        <div className="tab grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(6, 12).map((project) => (
            <div
              className="bg-[#212529] rounded-2xl shadow-lg overflow-hidden w-full max-w-sm sm:max-w-md transition-transform hover:scale-[1.02]"
              key={project._id}
            >
              <img
                src={project.thumbnail}
                alt="Card"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {project.title || "Responsive Card Title"}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-white font-semibold">Languages:</span>{" "}
                  {project.languages || "Not specified"}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center justify-center bg-[#962d75] text-white px-4 py-2 rounded hover:bg-[#5c1b48] transition cursor-pointer"
                  >
                    <IoMdOpen />
                    Live Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center justify-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
                  >
                    <IoMdOpen />
                    Github Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center text-white w-full">
          <i>No Projects here...</i>
        </h3>
      )}
    </div>
  );
};

export default Project_Tab2;

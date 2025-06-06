import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { handleSuccess } from "../../utils/Utils";

const Tab_3 = () => {
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

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_API}/project/${id}`
      );
      handleSuccess("Project deleted successful");
      handleGet();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);
  return (
    <div className="bg-black h-full p-4 rounded-3xl text-white">
      <h1 className="text-center text-2xl font-bold mb-6">Update Project</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 custom-scrollbar overflow-y-auto max-h-[80vh] px-2">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-[#212529] rounded-2xl shadow-lg overflow-hidden w-full transition-transform hover:scale-[1.02]"
          >
            {/* Project Image */}
            <img
              src={project.thumbnail}
              className="w-full h-48 sm:h-56 object-cover"
            />

            {/* Project Details */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 truncate">
                {project.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                <span className="font-semibold text-white">Languages:</span>{" "}
                {project.languages}
              </p>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <Link
                  to={`/dashboard/${project._id}`}
                  className="cursor-pointer bg-[#952e75] hover:bg-[#7a2460] text-white px-4 py-2 rounded text-center text-sm transition"
                >
                  Update
                </Link>
                <Link
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded text-center text-sm transition"
                  onClick={() => handleDelete(project._id)}
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab_3;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleSuccess } from "../../utils/Utils";
import BounceLoader from "react-spinners/BounceLoader";

const Single = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [languages, setLanguages] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleFocus = (e) => {
    e.target.style.border = "2px solid #952e75";
  };

  const handleBlur = (e) => {
    e.target.style.border = "1px solid white";
  };

  const handleSingleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/project/${id}`
      );
      const data = response.data;
      setTitle(data.title || "");
      setLanguages(data.languages || "");
      setProjectLink(data.projectLink || "");
      setGithubLink(data.githubLink || "");
      setFile(data.thumbnail); // optional
    } catch (err) {
      console.error("Failed to fetch project:", err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("languages", languages);
      formData.append("projectLink", projectLink);
      formData.append("githubLink", githubLink);
      if (file && file instanceof File) {
        formData.append("image", file);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_API}/project/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      handleSuccess("Update Successful");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      console.error("Failed to update project:", err);
    }
  };

  useEffect(() => {
    if (id) {
      handleSingleGet();
    }
  }, [id]);

  return (
    <div className="bg-[#141414] min-h-screen flex flex-col text-white px-4 py-6 md:px-10">
      {loading && (
        <div className="fixed inset-0 bg-[#141414] bg-opacity-60 flex justify-center items-center z-50">
          <BounceLoader color="rgba(150,46,118,1)" />
        </div>
      )}
      <button
        className="self-end bg-[#952e75] p-2 rounded cursor-pointer hover:bg-[#641e4e] transition"
        onClick={() => navigate("/dashboard")}
      >
        &larr; Back to Dashboard
      </button>

      <form
        className="flex flex-col items-center gap-6 pt-8 w-full max-w-6xl mx-auto"
        onSubmit={handleUpdate}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* File upload */}
          <div>
            <label className="border p-2 hover:bg-[#952e75] hover:text-white cursor-pointer rounded w-full block text-center transition">
              {file && "Update Thumbnail"}
              <input
                type="file"
                name="image"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          {/* Image preview */}
          <div className="flex justify-center items-center">
            {file && (
              <img
                src={file instanceof File ? URL.createObjectURL(file) : file}
                alt="Preview"
                className="h-[160px] w-[160px] object-cover rounded"
              />
            )}
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold mb-1">Title:</label>
            <input
              type="text"
              placeholder="Write title..."
              className="border p-2 outline-none rounded w-full bg-transparent text-white"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          {/* Languages */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold mb-1">Languages:</label>
            <input
              type="text"
              placeholder="Write languages..."
              className="border p-2 outline-none rounded w-full bg-transparent text-white"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setLanguages(e.target.value)}
              value={languages}
            />
          </div>

          {/* Project Link */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold mb-1">Project Link:</label>
            <input
              type="text"
              placeholder="http://www.website.com"
              className="border p-2 outline-none rounded w-full bg-transparent text-white"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setProjectLink(e.target.value)}
              value={projectLink}
            />
          </div>

          {/* GitHub Link */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold mb-1">GitHub Link:</label>
            <input
              type="text"
              placeholder="https://github.com/project-repo"
              className="border p-2 outline-none rounded w-full bg-transparent text-white"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setGithubLink(e.target.value)}
              value={githubLink}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#952e75] hover:bg-[#7a2460] transition text-white p-3 rounded w-full max-w-[400px] mt-6"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Single;

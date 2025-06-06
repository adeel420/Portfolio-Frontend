import React, { useState } from "react";
import axios from "axios";
import { handleError, handleSuccess } from "../../utils/Utils";
import BounceLoader from "react-spinners/BounceLoader";

const Tab_2 = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [languages, setLanguages] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFocus = (e) => {
    e.target.style.border = "2px solid #952e75";
  };

  const handleBlur = (e) => {
    e.target.style.border = "1px solid white";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !languages || !projectLink || !githubLink || !file) {
      return handleError("All fields are required");
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("languages", languages);
    formData.append("projectLink", projectLink);
    formData.append("githubLink", githubLink);
    formData.append("image", file);
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/project/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      handleSuccess("Project uploaded successfuly");
      setTitle("");
      setFile("");
      setLanguages("");
      setProjectLink("");
      setGithubLink("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black min-h-screen p-4 rounded-3xl text-white">
      {loading && (
        <div className="fixed inset-0 bg-[#141414] bg-opacity-60 flex justify-center items-center z-50">
          <BounceLoader color="rgba(150,46,118,1)" />
        </div>
      )}
      <h1 className="text-center text-2xl font-bold mb-6">Upload Projects</h1>

      <form
        className="flex flex-col items-center gap-6 pt-8 w-full"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Upload Thumbnail */}
          <div>
            <label className="border p-2 hover:bg-[#952e75] hover:text-white cursor-pointer rounded w-full block text-center">
              {file ? file.name : "Upload Thumbnail"}
              <input
                type="file"
                name="image"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          {/* Preview Thumbnail */}
          <div className="flex justify-center items-center">
            {file && (
              <img
                src={URL.createObjectURL(file)}
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
              className="input border p-2 outline-none rounded w-full"
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
              className="input border p-2 outline-none rounded w-full"
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
              className="input border p-2 outline-none rounded w-full"
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
              className="input border p-2 outline-none rounded w-full"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setGithubLink(e.target.value)}
              value={githubLink}
            />
          </div>
        </div>

        {/* Upload Button */}
        <button
          type="submit"
          className="bg-[#952e75] cursor-pointer hover:bg-[#7a2460] transition text-white p-2 rounded w-full max-w-[400px] mt-6"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Tab_2;

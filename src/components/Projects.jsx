import React, { useState, useEffect } from "react";
import Project_Tab1 from "./Project_Tab-1";
import Project_Tab2 from "./Project_Tab-2";
import Project_Tab3 from "./Project_Tab-3";
import axios from "axios";

const Projects = () => {
  const [activeBtn, setActiveBtn] = useState("tab1");
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/project/`)
      .then((res) => setProjects(res.data))
      .catch((err) => { console.log(err); setProjects([]); })
      .finally(() => setLoading(false));
  }, []);

  const handleTabChange = (tab) => {
    if (tab === activeBtn) return;
    setLoading(true);
    setActiveBtn(tab);
    setTimeout(() => setLoading(false), 500);
  };
  return (
    <div className="text-white p-8">
      <h1 className="text-center text-5xl font-semibold">Projects</h1>
      <p
        className="text-center text-[gray] mt-4 w-[80%] relative left-[50%]"
        style={{ transform: "translateX(-50%)" }}
      >
        A selection of my recent work — built with modern technologies, clean
        code, and real-world functionality.
      </p>

      {/* Tabs */}
      <div className="mt-8 flex items-center justify-center">
        <button
          className=" w-[220px] p-[10px] border border-[gray] cursor-pointer"
          onClick={() => handleTabChange("tab1")}
          style={{
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
            background:
              activeBtn === "tab1"
                ? "linear-gradient(90deg, rgba(150,46,118,1) 24%, rgba(79,43,167,1) 65%)"
                : "transparent",
          }}
        >
          Tab 1
        </button>
        <button
          className=" w-[220px] p-[10px] border border-[gray] cursor-pointer"
          onClick={() => handleTabChange("tab2")}
          style={{
            background:
              activeBtn === "tab2"
                ? "linear-gradient(90deg, rgba(150,46,118,1) 24%, rgba(79,43,167,1) 65%)"
                : "transparent",
          }}
        >
          Tab 2
        </button>
        <button
          className=" w-[220px] p-[10px] border border-[gray] cursor-pointer"
          onClick={() => handleTabChange("tab3")}
          style={{
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
            background:
              activeBtn === "tab3"
                ? "linear-gradient(90deg, rgba(150,46,118,1) 24%, rgba(79,43,167,1) 65%)"
                : "transparent",
          }}
        >
          Tab 3
        </button>
      </div>

      {/* Tab-Content */}
      <div className="min-h-[300px]">
        {loading || projects === null ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-[rgba(150,46,118,0.3)] border-t-[rgba(79,43,167,1)] animate-spin" />
            <p className="text-[gray] text-sm tracking-widest uppercase animate-pulse">Loading...</p>
          </div>
        ) : (
          <>
            {activeBtn === "tab1" && <Project_Tab1 projects={projects} />}
            {activeBtn === "tab2" && <Project_Tab2 projects={projects} />}
            {activeBtn === "tab3" && <Project_Tab3 projects={projects} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;

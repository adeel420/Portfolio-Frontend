import React, { useState } from "react";
import { dashboardTabs } from "../data/Data";
import Tab_1 from "../components/dashboard_subsections/Tab_1";
import Tab_2 from "../components/dashboard_subsections/Tab_2";
import Tab_3 from "../components/dashboard_subsections/Tab_3";
import Tab_4 from "../components/dashboard_subsections/Tab_4";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils/Utils";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate();

  const handleLogout = () => {
    handleSuccess("Go to homePage");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-[#952e75] flex md:flex-col flex-row md:gap-5 gap-2 items-center justify-center md:w-[10%] w-full p-2 md:h-screen h-auto">
        {dashboardTabs.map((data) => (
          <button
            key={data.id}
            onClick={() => {
              setActiveTab(data.id);
              data.id === 4 && handleLogout();
            }}
            style={{
              backgroundColor: activeTab === data.id ? "#ccc" : "transparent",
              color: activeTab === data.id ? "#952e75" : "white",
            }}
            className="text-2xl cursor-pointer hover:bg-[#ccc] p-2 rounded-full hover:text-[#952e75] transition"
          >
            <data.logo />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-[#141414] flex-1 text-white p-4 overflow-y-auto">
        {activeTab === 0 && <Tab_1 />}
        {activeTab === 1 && <Tab_2 />}
        {activeTab === 2 && <Tab_3 />}
        {activeTab === 3 && <Tab_4 />}
      </div>
    </div>
  );
};

export default Dashboard;

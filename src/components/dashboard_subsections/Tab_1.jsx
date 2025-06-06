import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Tab_1 = () => {
  const [users, setUsers] = useState([]);

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/user/`
      );
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id, newRole) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_API}/user/update-role/${id}`,
        { role: Number(newRole) }
      );
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
      <h1 className="text-center text-2xl font-bold mb-4">All Users</h1>

      {/* Scrollable Wrapper */}
      <div className="overflow-x-auto max-h-[80vh] custom-scrollbar rounded-xl">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[#952e75] text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-gray-600 hover:bg-gray-800 transition"
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  <select
                    defaultValue={user.role}
                    className="p-1 rounded"
                    onChange={(e) => handleUpdate(user._id, e.target.value)}
                  >
                    <option value={0} className="text-black">
                      User
                    </option>
                    <option value={1} className="text-black">
                      Admin
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab_1;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { handleError, handleSuccess } from "../utils/Utils";
import BounceLoader from "react-spinners/BounceLoader";

const Model = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/user/login-data`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      return handleError("New password is written");
    }
    if (password.length < 5) {
      return handleError("Length of password must be 5 characters long");
    }
    setLoading(true);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_API}/user/update/${user.id}`,
        { password }
      );
      setLoading(false);
      handleSuccess("Password updated successful");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-6">Update Password</h1>
      {loading && (
        <div className="fixed inset-0 bg-[#141414] bg-opacity-60 flex justify-center items-center z-50">
          <BounceLoader color="rgba(150,46,118,1)" />
        </div>
      )}
      <form
        className="w-full max-w-lg mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-xl font-semibold mb-1">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={user.name}
            disabled
            className="border p-2 outline-none rounded bg-transparent text-[gray]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-xl font-semibold mb-1">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={user.email}
            disabled
            className="border p-2 outline-none rounded bg-transparent text-[gray]"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-xl font-semibold mb-1">Password:</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="border p-2 outline-none rounded bg-transparent text-white"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#952e75] hover:bg-[#7a2460] transition text-white p-2 rounded mt-4"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default Model;

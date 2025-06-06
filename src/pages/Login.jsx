import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { handleError, handleSuccess } from "../utils/Utils";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("All fields are required");
    }
    if (password.length < 5) {
      return handleError("Length of password must be 5 characters long");
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/user/login`,
        loginInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      if (response.status === 200 || response.status === 201) {
        handleSuccess("Login Successful");
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(response.data.error);
      }
    } catch (err) {
      console.log(err);
      handleError(err?.response?.data?.error || "Login failed. Try again.");
    }
  };
  return (
    <div className="min-h-screen bg-[#141414] text-white p-4 md:p-12 flex items-center justify-center">
      {loading && (
        <div className="fixed inset-0 bg-[#141414] bg-opacity-60 flex justify-center items-center z-50">
          <BounceLoader color="rgba(150,46,118,1)" />
        </div>
      )}
      <div className="flex flex-col md:flex-row bg-black w-full max-w-5xl rounded-lg overflow-hidden shadow-lg">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-4">
          <img
            src={assets.loginImg}
            alt="Signup"
            className="w-full h-full max-w-[300px] md:max-w-[400px] max-h-[300px] md:max-h-[400px] object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Login
          </h1>
          <form
            className="w-full max-w-[400px] flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block mb-1 font-semibold text-lg">Email:</label>
              <input
                type="email"
                className="w-full p-2 rounded outline-none text-white"
                onChange={handleChange}
                name="email"
                value={loginInfo.email}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-lg">
                Password:
              </label>
              <input
                type="password"
                className="w-full p-2 rounded outline-none text-white"
                onChange={handleChange}
                name="password"
                value={loginInfo.password}
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-white text-black font-bold py-2 rounded mt-2 hover:bg-transparent hover:border hover:border-white hover:text-white transition-all duration-300"
            >
              Log In
            </button>

            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#952e75] font-semibold hover:underline"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

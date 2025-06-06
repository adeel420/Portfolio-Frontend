import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import axios from "axios";
import { handleError, handleSuccess } from "../utils/Utils";
import BounceLoader from "react-spinners/BounceLoader";

const Verify_Email = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code) {
      return handleError("Field are required");
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/user/verify-email`,
        { code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      if (response.status === 200 || response.status === 201) {
        handleSuccess("Email verified Successful");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(response.data.error);
      }
    } catch (err) {
      console.log(err);
      handleError(
        err?.response?.data?.error || "Email verification failed. Try again."
      );
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
            Verify Email
          </h1>
          <form
            className="w-full max-w-[400px] flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block mb-1 font-semibold text-lg">OTP:</label>
              <input
                type="text"
                className="w-full p-2 rounded outline-none text-white"
                name="code"
                onChange={(e) => setCode(e.target.value)}
                value={code}
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-white text-black font-bold py-2 rounded mt-2 hover:bg-transparent hover:border hover:border-white hover:text-white transition-all duration-300"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify_Email;

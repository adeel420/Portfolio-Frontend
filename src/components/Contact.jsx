import React, { useState } from "react";
import { assets5 } from "../assets/assets";
import axios from "axios";
import { handleError, handleSuccess } from "../utils/Utils";
import BounceLoader from "react-spinners/BounceLoader";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message || !phone) {
      return handleError("All fields are required");
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://adeel-backend-portfolio.vercel.app/api/contact",
        { firstName, lastName, email, phone, message },
        { headers: { "Content-Type": "application/json" } }
      );
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTimeout(() => {
        handleSuccess("Your message has been sent successfully");
      }, 500);
    } catch (err) {
      handleError("An error occurred, please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-[#141414] bg-opacity-60 flex justify-center items-center z-50">
          <BounceLoader color="rgba(150,46,118,1)" />
        </div>
      )}

      <div className="flex flex-wrap justify-around items-center p-8">
        <div className="w-full md:w-[50%] flex justify-center">
          <img
            src={assets5.contactImg}
            className="h-[300px] md:h-[500px] w-auto max-w-full"
            alt="Contact"
          />
        </div>
        <div className="w-full md:w-[50%] text-center md:text-left">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            Get In Touch
          </h1>
          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="border border-white p-3 md:p-4 rounded-lg text-white outline-none text-[16px] md:text-[18px]"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-white p-3 md:p-4 rounded-lg text-white outline-none text-[16px] md:text-[18px]"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-white p-3 md:p-4 rounded-lg text-white outline-none text-[16px] md:text-[18px]"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Phone No."
              className="border border-white p-3 md:p-4 rounded-lg text-white outline-none text-[16px] md:text-[18px]"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <textarea
              placeholder="Message"
              className="border border-white p-3 md:p-4 rounded-lg text-white outline-none text-[16px] md:text-[18px] w-full h-[120px] md:h-[150px] col-span-1 md:col-span-2"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </form>
          <button
            onClick={handleSubmit}
            className="mt-4 bg-white p-2 text-[16px] md:text-[18px] font-bold w-[120px] md:w-[130px] cursor-pointer hover:bg-transparent hover:border hover:border-white hover:text-[white]"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

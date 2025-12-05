import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function SignIn({ onClose }) {
  const [email, setEmail] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-[450px] rounded-lg p-6 shadow-xl relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center"
        >
          <X size={18} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-1">
          Register/Sign in
        </h2>
        <p className="text-center text-green-600 text-sm mb-6">
          ✔ Your information is protected
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm mb-4 outline-none focus:ring-2 focus:ring-red-500"
        />

        <button className="w-full bg-gray-300 text-white font-semibold py-3 rounded-md mb-3 cursor-not-allowed">
          Continue
        </button>

        <p className="text-center text-sm text-blue-500 mb-4 cursor-pointer">
          Trouble signing in?
        </p>

        <div className="flex items-center my-4">
          <span className="flex-1 border-t"></span>
          <span className="mx-3 text-sm text-gray-500">Or continue with</span>
          <span className="flex-1 border-t"></span>
        </div>

        <div className="flex justify-center gap-6 mb-6">

          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer transition">
            <FcGoogle />
          </div>

          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer transition">
            <FaFacebook />
          </div>

          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer transition">
            <FaApple />
          </div>

          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer transition">
            {/* <FontAwesomeIcon icon={faXTwitter} className="text-2xl" /> */}
          </div>
        </div>

      <div className="text-center text-sm mb-4">
          Location: <span className="font-semibold">Nigeria ▾</span>
        </div>


        <p className="text-xs text-gray-500 text-center eading-5 px-4">
          By continuing, you confirm that you are an adult and have read and
          accepted our{" "}
          <span className="text-blue-500">Membership Agreement</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span>. Your
          information may be used for marketing purposes, but you can opt out at
          any time.
        </p>

        <p className="text-center text-sm text-blue-500 mt-4 cursor-pointer">
          Why choose a location?
        </p>
      </div>
    </div>
  );
}

export default SignIn;

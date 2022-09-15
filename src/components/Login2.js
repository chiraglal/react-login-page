import React from "react";
import LoginImg2 from "../assets/login2.jpg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
const Login2 = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        src={LoginImg2}
        alt="/"
        className="absolute w-full h-full object-cover mix-blend-overlay"
      />
      <div className="flex justify-center items-center h-full">
        <form action="" className="max-w-[400px] w-full bg-white mx-auto p-8">
          <h2 className="text-4xl font-bold text-center py-4">BRAND.</h2>
          <div className="flex justify-between py-8">
            <p className="border shadow-md hover:shadow-xl px-6 py-2 relative flex items-center gap-3 rounded-md">
              <BsFacebook /> Facebook
            </p>
            <p className="border shadow-md hover:shadow-xl px-6 py-2 relative flex items-center gap-3 rounded-md">
              <FcGoogle /> Google
            </p>
          </div>
          <div className="flex flex-col mb-4 text-center">
            <label>Username</label>
            <input
              type="text"
              className="border relative bg-gray-100 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col mb-4 text-center">
            <label>Password</label>
            <input
              type="password"
              className="border relative bg-gray-100 rounded-md p-2"
            />
          </div>
          <button className="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-500 relative rounded-md text-white rounded-md">
            Sign In
          </button>
          <p className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </p>
          <button className="p-1 mt-4 w-full border rounded-md bg-sky-600 hover:bg-sky-500 relative">
            Not a Member? Sign Up Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login2;

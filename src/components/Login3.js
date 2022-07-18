import React from "react";

import LoginImg2 from "../assets/login2.jpg";

export default function Login3() {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-md hover:shadow-xl duration-200 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={LoginImg2} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">BRAND.</h2>
            <div className="flex">
              <input
                className="border m-1 rounded-md"
                type="text"
                placeholder="Username"
              />
              <input
                className="border p-1 m-1 rounded-md"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="w-full py-2 my-4 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white">
              Sign In
            </button>
            <p className="text-center">Forgot Username or Password?</p>
          </form>
          <button className="border w-full h-10 flex items-center justify-center rounded-md bg-slate-600 hover:bg-slate-500 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

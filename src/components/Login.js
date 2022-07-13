import React from "react";
import LoginImg from "../assets/login.jpg";
const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full rounded-lg">
      <div className="hidden sm:block">
        <img src={LoginImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="bg-gray-200 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">BRAND.</h2>
          <div className="flex flex-col py-2 text-center">
            <label>Username</label>
            <input className="border p-2 rounded-md" type="text" />
          </div>
          <div className="flex flex-col py-2 text-center">
            <h2>Password</h2>
            <input
              className="border p-2 rounded-md"
              type="password"
              name=""
              id=""
            />
          </div>
          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md">
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="flex items-center mr-2">
              <input type="checkbox" className="mr-1 hover:cursor-pointer" />
              Remember Me
            </p>
            <button className="border p-1 rounded-md bg-teal-600 text-white">
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

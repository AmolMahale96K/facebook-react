import React from "react";

function Facebook1() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-blue-500 text-5xl font-bold mb-6">Facebook</h1>
      <div className="bg-white h-[350px] w-[400px] flex flex-col items-center justify-center rounded-lg shadow-md">
        <span className="text-lg font-medium">Log in to Facebook</span>
        <input
          type="text"
          placeholder="Email address or phone number"
          className="h-10 w-[90%] rounded-lg mt-5 px-3 text-base border-gray-300 border"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-10 w-[90%] rounded-lg mt-4 px-3 text-base border-gray-300 border"
        />
        <button className="h-11 w-[90%] rounded-lg mt-5 bg-blue-600 text-white text-lg font-bold">
          Log In
        </button>
        <a
          href="#"
          className="text-blue-600 text-sm font-medium mt-4 hover:underline"
        >
          Forgotten account? Sign up for Facebook
        </a>
      </div>
    </div>
  );
}

export default Facebook1;

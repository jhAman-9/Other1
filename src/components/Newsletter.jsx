import React from "react";

const Newsletter = () => {
  return (
    <div className="h-80 w-full bg-cyan-100 m-10">
      <div className="flex flex-col justify-items-start mx-32">
        <div className="h-5  p-10">
          <span className="text-xl font-bold">Subscribe Now</span>
        </div>
        <div className="h-5  p-10 w-90 font-bold">
          <span className="text-4xl">Newseltter For More!</span>
        </div>
        <div className="h-5 p-10">
          <span className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, ea?
          </span>
        </div>
        <div className="flex items-center rounded-2xl mb-6 ml-10">
          <input
            type="text"
            className="bg-white outline-none text-black justify-center items-center h-12 w-80 pl-4 rounded-l-3xl"
            onChange={(e) => e.target.value}
            placeholder="Email"
          />
          <div className="bg-white flex items-center justify-center h-12 w-32  text-gray-600 cursor-pointer ">
            <button className="bg-yellow-400 text-black rounded-r-md px-4 py-2 ml-2 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 w-full rounded-3xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

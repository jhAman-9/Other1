import React from "react";

const Learners = () => {
  return (
    <div className="h-44 w-full mt-5">
      <div className="flex justify-center items-center text-lg">
        <span>Our Learners Work At</span>
      </div>
      <div className="flex justify-center items-center gap-10 m-2">
        <div className="w-40 border-r-4 border-gray-500 flex items-center justify-center">
          <img src="public/Capgemini-Logo.wine.png" alt="" />
        </div>
        <div className="w-40  border-r-4 border-gray-500 flex items-center justify-center">
          <img src="public/Tech_Mahindra-Logo.wine.png" alt="" />
        </div>
        <div className="w-40  border-r-4 border-gray-500 flex items-center justify-center">
          <img src="public/Amazon_Pay-Logo.wine.png" alt="" />
        </div>
        <div className="w-40 flex items-center justify-center">
          <img src="public/Meta-Logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Learners;

// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const Header = () => {
//   return (
//     <div className="w-full h-16 mb-1">
//       <div className="header bg-white flex items-center justify-between border-s-blue-800 w-full h-14 ml-5  pr-10">
//         <div className="border-2 border-blue-800 flex items-center justify-stretch">
//           <div className="text-white text-2xl bg-blue-800">EX</div>
//           <div className="text-xl text-blue-800 font-bold mr-1">cellenC</div>
//         </div>
//         <div className="flex items-center justify-center gap-10 hover:cursor-pointer">
//           <span className="text-black font-bold ">Course</span>
//           <span className="text-black font-bold">Business</span>
//           <span className="text-black font-bold">Success Story</span>
//           <span className="text-black font-bold">Blog</span>
//           <span className="text-black font-bold">Contact Us</span>
//         </div>
//       </div>

//       <div className="bg-white flex items-center w-full h-0.5 justify-start ml-5">
//         <div className="flex text-blue-800 gap-1 pl-1">
//           <div className="text-[9px]">TOWORDS</div>
//           <div className="text-[9px]">GROWTH</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <div className="w-full mb-1">
      <div className="bg-white flex items-center justify-between  rounded-t-lg md:rounded-none px-4 py-2">
        <div className="border-2 border-blue-800 flex items-center justify-stretch">
          <div className="text-white text-2xl bg-blue-800">EX</div>
          <div className="text-xl text-blue-800 font-bold mr-1">cellenC</div>
        </div>
        <div className=" md:flex items-center justify-center gap-10 hover:cursor-pointer">
          <span className="text-black font-bold">Course</span>
          <span className="text-black font-bold">Business</span>
          <span className="text-black font-bold">Success Story</span>
          <span className="text-black font-bold">Blog</span>
          <span className="text-black font-bold">Contact Us</span>
        </div>
      </div>

      <div className="bg-white flex items-center w-full h-0.5 justify-start ml-5 ">
        <div className="flex text-blue-800 gap-1">
          <div className="text-[9px]">TOWARDS</div>
          <div className="text-[9px]">GROWTH</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React from 'react'

// const Live = () => {
//   return (
//     <div
//       className="bg-cover bg-center overflow-hidden h-44 w-full mt-10"
//       style={{
//         backgroundImage: "url('public/Group 47554.png')",
//       }}
//     >
//       <div className="flex justify-evenly items-center gap-5 p-5">
//         <div className="grid grid-cols-1">
//           <div className="">
//             <img src="public/video-tutorial_12571352.png" alt="" />
//           </div>
//           <div className="flex flex-col text-white font-bold">
//             <span className="px-2">100%</span>
//             <span className="px-2">Live Training</span>
//           </div>
//         </div>
//         <div className="grid grid-cols-1">
//           <div className="p-1">
//             <img src="public/diamond.png" alt="" />
//           </div>
//           <div className="flex flex-col  text-white font-bold ">
//             <span className="px-2">100%</span>
//             <span className="px-2">Live Training</span>
//           </div>
//         </div>
//         <div className="grid grid-cols-1">
//           <div className="p-1">
//             <img src="public/target.png" alt="" />
//           </div>
//           <div className="flex flex-col  text-white font-bold">
//             <span className="px-2">100%</span>
//             <span className="px-2">Live Training</span>
//           </div>
//         </div>
//         <div className="grid grid-cols-1">
//           <div className="p-1">
//             <img src="public/scroll.png" alt="" />
//           </div>
//           <div className="flex flex-col  text-white font-bold">
//             <span className="px-2">100%</span>
//             <span className="px-2">Live Training</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Live


import React from "react";

const Live = () => {
  return (
    <div className="bg-cover bg-center overflow-hidden h-64 sm:h-44 w-full mt-10" style={{
        backgroundImage: "url('public/Group 47554.png')",
      }}
    >">
      <div className="flex flex-col sm:flex-row justify-evenly items-center gap-5 p-5">
        <div className="flex items-center">
          <img
            className="w-12 sm:w-auto"
            src="public/video-tutorial_12571352.png"
            alt=""
          />
          <div className="ml-2 text-white font-bold">
            <span>100%</span>
            <span>Live Training</span>
          </div>
        </div>
        <div className="flex items-center">
          <img className="w-12 sm:w-auto" src="public/diamond.png" alt="" />
          <div className="ml-2 text-white font-bold">
            <span>100%</span>
            <span>Live Training</span>
          </div>
        </div>
        <div className="flex items-center">
          <img className="w-12 sm:w-auto" src="public/target.png" alt="" />
          <div className="ml-2 text-white font-bold">
            <span>100%</span>
            <span>Live Training</span>
          </div>
        </div>
        <div className="flex items-center">
          <img className="w-12 sm:w-auto" src="public/scroll.png" alt="" />
          <div className="ml-2 text-white font-bold">
            <span>100%</span>
            <span>Live Training</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;


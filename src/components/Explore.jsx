import React from "react";

const Explore = () => {
  return (
    <>
      <div className="flex justify-between w-[55%] my-5">
            <div className="grid grid-cols-4 h-20 w-20  text-yellow-500 font-bold p-5 gap-5 text-2xl">
              <div className="justify-self-end">.</div>
              <div className="justify-self-end">.</div>
              <div className="justify-self-end">.</div>
              <div className="justify-self-end">.</div>
              <div className="justify-self-end">.</div>
              <div className="justify-self-end">.</div>
              <div className="justify-self-end">.</div>
              <div className="justify-self-end">.</div>
            </div>
          <span className="text-xl font-bold p-2 ">Explore Courses</span>
      </div>

      <div className="flex items-center justify-center font-bold">
        <span className="text-xs underline ">Technology</span>
      </div>

      <div className="flex flex-nowrap justify-center mt-5">
        <div className="w-1/3 p-1">
          <img
            src="public/download.jpeg"
            alt=""
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="w-1/3 p-1">
          <img
            src="public/images.jpeg"
            alt=""
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="w-1/3 p-1">
          <img
            src="public/image_870x_646debd662570.jpg"
            alt=""
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="w-1/3 p-1">
          <img
            src="public/images (1).jpeg"
            alt=""
            className="w-full h-full object-cover"
          ></img>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="grid grid-cols-4 h-20 w-20  text-yellow-500 font-bold p-5 gap-5 text-2xl mr-5">
          <div className="justify-self-end">.</div>
          <div className="justify-self-end">.</div>
          <div className="justify-self-end">.</div>
          <div className="justify-self-end">.</div>
          <div className="justify-self-end">.</div>
          <div className="justify-self-end">.</div>
          <div className="justify-self-end">.</div>
          <div className="justify-self-end">.</div>
        </div>
      </div>
    </>
  );
};

export default Explore;




// import React from "react";

// const Explore = () => {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="w-full md:w-[55%] my-5">
//         <div className="grid grid-cols-4 gap-5 text-yellow-500 font-bold p-5 text-2xl">
//           {Array.from({ length: 8 }).map((_, index) => (
//             <div key={index} className="justify-self-end">
//               .
//             </div>
//           ))}
//         </div>
//         <span className="text-xl font-bold p-2">Explore Courses</span>
//       </div>

//       <div className="flex items-center justify-center font-bold">
//         <span className="text-xs underline">Technology</span>
//       </div>
//       <div className="flex flex-nowrap justify-center mt-5">
//         <div className="w-1/3 p-1">
//           <img
//             src="public/download.jpeg"
//             alt=""
//             className="w-full h-full object-cover"
//           ></img>
//         </div>
//         <div className="w-1/3 p-1">
//           <img
//             src="public/images.jpeg"
//             alt=""
//             className="w-full h-full object-cover"
//           ></img>
//         </div>
//         <div className="w-1/3 p-1">
//           <img
//             src="public/image_870x_646debd662570.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           ></img>
//         </div>
//         <div className="w-1/3 p-1">
//           <img
//             src="public/images (1).jpeg"
//             alt=""
//             className="w-full h-full object-cover"
//           ></img>
//         </div>
//       </div>

//       <div className="w-full md:w-[55%] flex justify-end mt-5">
//         <div className="grid grid-cols-4 gap-5 text-yellow-500 font-bold p-5 text-2xl">
//           {Array.from({ length: 8 }).map((_, index) => (
//             <div key={index} className="justify-self-end">
//               .
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Explore;

const Talk = () => {
  return (
    <div className="h-[600px] w-full mt-8 rounded-xl relative">
      <div className="absolute inset-0">
        <div className="bg-cyan-100 h-1/2"></div>
        <div className="bg-white h-1/2"></div>
      </div>
      <div className=" absolute h-full w-full flex justify-center items-center">
        <div
          className="h-[70%] "
          style={{
            backgroundImage: "url('public/BACKGROUND.png')",
          }}
        >
          <img src="public/Group 83.png" alt="" />
        </div>

        <div className="h-full flex flex-col p-8 mt-32 w-[50%]">
          <p className="text-4xl font-bold text-center text-amber-950">
            TALK TO US
          </p>
          <div className="p-1 w-full mt-5">
            <input
              type="text"
              placeholder="Full Name"
              className="px-5 py-2 border  rounded-md focus:outline-none focus:border-amber-600 w-full"
            />
          </div>
          <div className="p-1 w-full mt-5">
            <input
              type="text"
              placeholder="Full Name"
              className="px-5 py-2 border  rounded-md focus:outline-none focus:border-amber-600 w-full"
            />
          </div>
          <div className="p-1 w-full mt-5">
            <input
              type="text"
              placeholder="Enter email address"
              className="px-5 py-2 border  rounded-md focus:outline-none focus:border-amber-600 w-full"
            />
          </div>
          <div className="p-1 w-full mt-5">
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-5 py-2 border  rounded-md focus:outline-none focus:border-amber-600 w-full"
            />
          </div>
          <div className="p-1 w-full mt-5">
            <input
              type="text"
              placeholder="Current Location"
              className="px-5 py-2 border  rounded-md focus:outline-none focus:border-amber-600 w-full"
            />
          </div>
          <div className="p-1 w-full mt-5">
            <div className="flex justify-start items-center">
              <input
                type="checkbox"
                className="border  rounded-md focus:outline-none mr-2"
              />
              <p>I Agree with the terms and conditions</p>
            </div>
          </div>

          <div className="p-1 w-full my-5">
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 ">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;


// const Talk = () => {
//   return (
//     <div className="h-auto md:h-[600px] w-full mt-8 rounded-xl relative">
//       <div className="absolute inset-0">
//         <div className="bg-cyan-100 h-1/2"></div>
//         <div className="bg-white h-1/2"></div>
//       </div>
//       <div className="absolute h-full w-full flex flex-col justify-center items-center">
//         <div
//           className="h-[50%] md:h-[70%] w-full md:w-auto"
//           style={{
//             backgroundImage: "url('public/BACKGROUND.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <img src="public/Group 83.png" alt="" />
//         </div>

//         <div className="h-auto md:h-full flex flex-col p-8 mt-4 md:mt-0 md:w-[50%]">
//           <p className="text-4xl font-bold text-center text-amber-950">
//             TALK TO US
//           </p>
//           <div className="p-1 w-full mt-2 md:mt-5">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="px-5 py-2 border rounded-md focus:outline-none focus:border-amber-600 w-full"
//             />
//           </div>
//           <div className="p-1 w-full mt-2 md:mt-5">
//             <input
//               type="text"
//               placeholder="Email Address"
//               className="px-5 py-2 border rounded-md focus:outline-none focus:border-amber-600 w-full"
//             />
//           </div>
//           <div className="p-1 w-full mt-2 md:mt-5">
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="px-5 py-2 border rounded-md focus:outline-none focus:border-amber-600 w-full"
//             />
//           </div>
//           <div className="p-1 w-full mt-2 md:mt-5">
//             <input
//               type="text"
//               placeholder="Current Location"
//               className="px-5 py-2 border rounded-md focus:outline-none focus:border-amber-600 w-full"
//             />
//           </div>
//           <div className="p-1 w-full mt-2 md:mt-5">
//             <div className="flex justify-start items-center">
//               <input
//                 type="checkbox"
//                 className="border rounded-md focus:outline-none mr-2"
//               />
//               <p>I Agree with the terms and conditions</p>
//             </div>
//           </div>

//           <div className="p-1 w-full my-2 md:my-5">
//             <button className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500">
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Talk;


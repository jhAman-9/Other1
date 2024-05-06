// /* eslint-disable no-unused-vars */
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMagnifyingGlass,
//   faChevronDown,
// } from "@fortawesome/free-solid-svg-icons";
// import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";

// const Body = () => {
//   return (
//       <div
//         className="bg-cover h-[600px] bg-center overflow-hidden"
//         style={{
//           backgroundImage:
//             "url('public/smiling-indian-teen-girl-using-laptop-online-study-blue-background-happy-student-educational-webinar.png')",
//         }}
//       >
//         <div className="pl-20">
//           <div className="text-white font-bold pt-20 pl-2">
//             <div className="text-4xl overline decoration-solid">
//               Get Trained From
//             </div>
//             <div className="text-4xl">India'S</div>
//             <div className="text-4xl underline decoration-solid"># EDTECH</div>
//           </div>

//           <div className="py-6 flex items-center justify-start rounded-2xl">
//             <button className=" h-12 rounded-l-3xl flex-shrink-0 focus:outline-none ml-2 text-gray-600 bg-white pl-2">
//               <FontAwesomeIcon icon={faMagnifyingGlass} />
//             </button>
            // <input
            //   type="text"
            //   className="bg-white outline-none text-black flex justify-center items-center h-12 w-80 pl-2"
            //   onChange={(e) => e.target.value}
            //   placeholder="Search For Courses & Branch"
            // />
//             <div className="bg-white outline-none flex justify-center items-center h-12 rounded-r-3xl p-3 text-gray-600 cursor-pointer">
//               <FontAwesomeIcon icon={faChevronDown} />
//             </div>
//           </div>

//           <span className="text-white text-2xl pl-2 pb-6">
//             Start Your Journey Towards Growth{" "}
//           </span>

//           <div className="pl-2 flex w-96 py-8 sm:flex-col">
//             <div className="flex flex-wrap text-white text-sm rounded-md gap-4 font-medium">
//               <div className="p-2 bg-black rounded-md ">100% Placement</div>
//               <div className="p-2 bg-black rounded-md">Experienced Traners</div>
//               <div className="p-2 bg-black rounded-md">Appordable Fee</div>
//               <div className="p-2 bg-black rounded-md">
//                 Global Certification
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-4 text-white pl-4">
//             <div>Facebook / Instagram / Twitter</div>
//             <div className="flex gap-4 py-1">
//               <FontAwesomeIcon className="text-black h-5" icon={faApple} />
//               <FontAwesomeIcon
//                 className="text-green-900 h-5"
//                 icon={faAndroid}
//               />{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Body;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";

const Body = () => {
  return (
    <div
      className="bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('public/smiling-indian-teen-girl-using-laptop-online-study-blue-background-happy-student-educational-webinar.png')",
      }}
    >
      <div className="container mx-auto px-20 py-20">
        <div className="text-white font-bold text-4xl pb-6">
          <div className="overline decoration-solid">Get Trained From</div>
          <div>India'S</div>
          <div className="underline decoration-solid"># EDTECH</div>
        </div>

        <div className="flex items-center rounded-2xl mb-6">
          <button className="h-12 w-12 flex-shrink-0 focus:outline-none text-gray-600 bg-white rounded-l-3xl flex items-center justify-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            className="bg-white outline-none text-black justify-center items-center h-12 w-80 pl-2"
            onChange={(e) => e.target.value}
            placeholder="Search For Courses & Branch"
          />
          <div className="bg-white flex items-center justify-center h-12 w-12 rounded-r-3xl text-gray-600 cursor-pointer">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <span className="text-white text-2xl mb-6">
          Start Your Journey Towards Growth
        </span>

        <div className="pl-2 flex w-96 py-8 sm:flex-col">
          <div className="flex flex-wrap text-white text-sm rounded-md gap-4 font-medium">
            <div className="p-2 bg-black rounded-md ">100% Placement</div>
            <div className="p-2 bg-black rounded-md">Experienced Traners</div>
            <div className="p-2 bg-black rounded-md">Appordable Fee</div>
            <div className="p-2 bg-black rounded-md">Global Certification</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white mt-6">
          <div>Facebook / Instagram / Twitter</div>
          <div className="flex gap-4">
            <FontAwesomeIcon className="text-black h-5" icon={faApple} />
            <FontAwesomeIcon className="text-green-900 h-5" icon={faAndroid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;


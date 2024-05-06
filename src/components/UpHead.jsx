// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const UpHead = () => {
//   return (
//     <div className="w-full h-6 p-1 bg-blue-800 flex justify-around items-center py-4">
//       <span>
//         <div className="text-xs text-white flex gap-1">
//           <FontAwesomeIcon className="mt-[2px]" icon={faLocationDot} />
//           EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near Dmart, Kavuri
//           Hills , Madhapur, Hydrabad, Telangana 500081
//         </div>
//       </span>
//         <div className="text-xs text-white flex gap-1">
//           <FontAwesomeIcon className="m-[2px]" icon={faEnvelope} />
//           info@excellenc.com
//         </div>
//     </div>
//   );
// };

// export default UpHead;


// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const UpHead = () => {
  return (
    <div className="w-full bg-blue-800 py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-xs">
          <div className="mb-2 md:mb-0">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLocationDot} className="mt-[2px]" />
              <span>
                EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near Dmart,
                Kavuri Hills, Madhapur, Hyderabad, Telangana 500081
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            <span>info@excellenc.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpHead;


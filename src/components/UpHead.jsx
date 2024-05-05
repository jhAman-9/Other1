// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const UpHead = () => {
  return (
    <div className="w-full h-6 p-1 bg-blue-800 flex justify-around items-center py-4">
      <span>
        <div className="text-xs text-white flex gap-1">
          <FontAwesomeIcon className="mt-[2px]" icon={faLocationDot} />
          EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near Dmart, Kavuri
          Hills , Madhapur, Hydrabad, Telangana 500081
        </div>
      </span>
        <div className="text-xs text-white flex gap-1">
          <FontAwesomeIcon className="m-[2px]" icon={faEnvelope} />
          info@excellenc.com
        </div>
    </div>
  );
};

export default UpHead;

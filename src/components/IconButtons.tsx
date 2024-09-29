import React from "react";
import { FaCog, FaQuestionCircle, FaSearch } from "react-icons/fa";

const IconButtons = () => {
  return (
    <div className="flex items-center space-x-2">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <FaSearch className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <FaQuestionCircle className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <FaCog className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default IconButtons;

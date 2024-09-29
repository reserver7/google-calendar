import React, { memo } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa";

const MakeButton = () => {
  return (
    <div className="mb-6">
      <button className="flex items-center justify-between w-40 px-4 py-3 bg-white border rounded-full shadow-sm hover:shadow-md">
        <div className="flex items-center">
          <FaGooglePlusG width={24} height={24} className="mr-3" />
          <span className="text-gray-700 font-medium text-lg">만들기</span>
        </div>
        
        <IoMdArrowDropdown className="text-gray-600 w-5 h-5" />
      </button>
    </div>
  );
};

export default memo(MakeButton);

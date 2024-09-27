import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const MakeButton: React.FC = () => {
  return (
    <div className="mb-6">
      <button className="flex items-center justify-between w-40 px-4 py-3 bg-white border rounded-full shadow-sm hover:shadow-md">
        <div className="flex items-center">
          <img
            src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_25_2x.png"
            alt="Google Logo"
            className="w-6 h-6 mr-3"
          />
          <span className="text-gray-700 font-medium text-lg">만들기</span>
        </div>
        {/* 아래 화살표 */}
        <IoMdArrowDropdown className="text-gray-600 w-5 h-5" />
      </button>
    </div>
  );
};

export default MakeButton;

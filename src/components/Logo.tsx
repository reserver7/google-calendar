import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Logo = () => {
  return (
    <div className="flex items-center">
      <button className="mr-4 p-2 hover:bg-gray-100 rounded-full">
        <GiHamburgerMenu className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex items-center">
        <Image
          src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_25_2x.png"
          alt="Google Calendar"
          width={40}
          height={40}
        />
        <h1 className="ml-2 text-lg font-normal text-gray-700">Calendar</h1>
      </div>
    </div>
  );
};

export default Logo;

import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavigationButtonsProps } from "@/types/types";
import { useNavigation } from "@/hooks/useNavigation";

const NavigationButtons = ({ selectedDate, currentMonth }: NavigationButtonsProps) => {
  const { handleTodayClick, handlePrevWeekClick, handleNextWeekClick } = useNavigation(selectedDate, currentMonth);

  return (
    <div className="flex items-center ml-8">
      <button
        className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
        onClick={handleTodayClick}
      >
        오늘
      </button>

      <button
        className="ml-2 p-2 hover:bg-gray-100 rounded-full"
        onClick={handlePrevWeekClick}
      >
        <IoIosArrowBack className="w-5 h-5 text-gray-600" />
      </button>
      <button
        className="p-2 hover:bg-gray-100 rounded-full"
        onClick={handleNextWeekClick}
      >
        <IoIosArrowForward className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default NavigationButtons;

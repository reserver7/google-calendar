import React from "react";
import { useSelector } from "react-redux";
import { format, getMonth } from "date-fns";
import { RootState } from "@/redux/store";
import NavigationButtons from "./NavigationButtons";
import Logo from "./Logo";
import IconButtons from "./IconButtons";

const Header = () => {
  const selectedDate = useSelector(
    (state: RootState) => new Date(state.calendar.selectedDate)
  );
  const currentMonth = getMonth(selectedDate);

  return (
    <header className="flex items-center justify-between px-6 py-3 border-2 ">
      <div className="flex items-center">
        <Logo />

        <NavigationButtons
          selectedDate={selectedDate}
          currentMonth={currentMonth}
        />
      </div>

      <h2 className="ml-4 text-lg font-normal text-gray-900">
        {format(selectedDate, "yyyy년 M월")}
      </h2>

      <IconButtons />
    </header>
  );
};

export default Header;

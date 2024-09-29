import React from "react";
import DatePicker from "./DatePicker";
import MakeButton from "./MakeButton";

const Sidebar = () => {
  return (
    <div className="w-75 p-4 bg-white">
      <MakeButton />

      <DatePicker />
    </div>
  );
};

export default Sidebar;

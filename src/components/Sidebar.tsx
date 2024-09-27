import React from "react";
import DatePicker from "./DatePicker";
import MakeButton from "./MakeButton";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-80 p-4 bg-white">
      {/* "만들기" 버튼 */}
      <MakeButton />

      {/* 달력 */}
      <DatePicker />
    </aside>
  );
};

export default Sidebar;

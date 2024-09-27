"use client";

import React, { useState } from "react";
import AddEventModal from "../components/AddEventModal";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WeekCalendar from "../components/WeekCalendar";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* 상단 네비게이션 */}
      <Header />
      {/* 좌측 사이드바 및 주별 달력 */}
      <div className="flex">
        <Sidebar />
        <WeekCalendar />
      </div>
      {/* 이벤트 추가 모달 */}
      {isModalOpen && <AddEventModal />}
    </div>
  );
};

export default Home;

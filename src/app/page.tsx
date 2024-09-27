"use client";

import { useState } from "react";
import AddEventModal from "../components/AddEventModal";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WeekCalendar from "../components/WeekCalendar";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 상단 네비게이션 */}
      <Header />
      {/* 좌측 사이드바 및 주별 달력 */}
      <div className="flex flex-grow overflow-hidden">
        {/* 좌측 사이드바 고정 */}
        <Sidebar />

        {/* 주별 달력 (스크롤 가능) */}
        <div className="flex-grow overflow-y-auto">
          <WeekCalendar />
        </div>
      </div>
      {/* 이벤트 추가 모달 */}
      {isModalOpen && <AddEventModal />}
    </div>
  );
};

export default Home;

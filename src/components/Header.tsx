import { FaCog, FaQuestionCircle, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { nextWeek, prevWeek, setToday } from "../redux/slices/calendarSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-between px-6 py-3 border-2 ">
      <div className="flex items-center">
        {/* 햄버거 메뉴 */}
        <button className="mr-4 p-2 hover:bg-gray-100 rounded-full">
          <GiHamburgerMenu className="w-6 h-6 text-gray-600" />
        </button>

        {/* 구글 캘린더 로고 및 텍스트 */}
        <div className="flex items-center">
          <img
            src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_25_2x.png"
            alt="Google Calendar"
            className="w-10 h-10"
          />
          <h1 className="ml-2 text-lg font-normal text-gray-700">Calendar</h1>
        </div>

        {/* 오늘 버튼 및 날짜 이동 버튼 */}
        <div className="flex items-center ml-8">
          <button
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => dispatch(setToday())} // 오늘 버튼 클릭 시 오늘 날짜로 이동
          >
            오늘
          </button>

          {/* 날짜 이동 버튼 */}
          <button
            className="ml-2 p-2 hover:bg-gray-100 rounded-full"
            onClick={() => dispatch(prevWeek())}
          >
            <IoIosArrowBack className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => dispatch(nextWeek())}
          >
            <IoIosArrowForward className="w-5 h-5 text-gray-600" />
          </button>

          {/* 현재 날짜 */}
          <h2 className="ml-4 text-lg font-normal text-gray-900">2024년 9월</h2>
        </div>
      </div>

      {/* 오른쪽 아이콘 */}
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
    </header>
  );
};

export default Header;

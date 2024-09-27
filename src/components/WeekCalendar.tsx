import { addDays, format, startOfWeek } from "date-fns";
import { ko } from "date-fns/locale";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// 시간대 배열을 24시간 기준으로 생성
const hours = Array.from({ length: 24 }, (_, i) =>
  i === 0 ? "12 AM" : `${i < 12 ? i : i - 12} ${i < 12 ? "AM" : "PM"}`
);

const WeekCalendar = () => {
  const selectedDate = useSelector(
    (state: RootState) => new Date(state.calendar.selectedDate)
  );

  const startOfSelectedWeek = startOfWeek(selectedDate, { weekStartsOn: 0 });
  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfSelectedWeek, i)
  );

  return (
    <div className="flex w-full h-screen">
      {/* 시간대 표시 */}
      <div className="w-14 grid grid-rows-[repeat(24,_minmax(60px,_1fr))] border-r border-gray-300">
        {hours.map((hour, index) => (
          <div key={index} className="text-xs text-gray-500 p-1">
            {/* 오전 1시부터 오후 11시까지만 텍스트 표시 */}
            {index !== 0 && index <= 23 ? hour : ""}
          </div>
        ))}
      </div>

      {/* 주간 달력 */}
      <div className="flex-grow grid grid-cols-7 grid-rows-[repeat(24,_minmax(60px,_1fr))] gap-0.5">
        {daysOfWeek.map((date, dayIndex) => (
          <div key={dayIndex} className="border-l border-gray-300 relative">
            {/* 요일 및 날짜 헤더 */}
            <div className="text-center border-b border-gray-300 p-2 text-lg font-medium bg-white sticky top-0 z-10">
              <div className="text-sm text-gray-500">
                {format(date, "E", { locale: ko })}
              </div>
              <div className="text-2xl text-gray-900">{format(date, "dd")}</div>
            </div>

            {/* 시간대별 빈 슬롯 */}
            {hours.map((_, hourIndex) => (
              <div
                key={hourIndex}
                className="relative h-16 border-b border-gray-200"
              >
                {/* 간격을 줄임 */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;

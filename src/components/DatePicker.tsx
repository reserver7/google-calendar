import React, { useCallback, useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ko } from "react-day-picker/locale";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedDate,
  setSelectedMonth,
} from "@/redux/slices/calendarSlice";
import { RootState } from "@/redux/store";
import { isSameMonth } from "date-fns";

const DatePicker = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state: RootState) => new Date(state.calendar.selectedDate)
  );
  const currentMonthFromStore = useSelector(
    (state: RootState) => new Date(state.calendar.currentMonth)
  );
  const [currentMonth, setCurrentMonth] = useState(currentMonthFromStore);

  useEffect(() => {
    setCurrentMonth(currentMonthFromStore);
  }, [currentMonthFromStore]);

  // 날짜 선택 핸들러
  const handleDaySelect = useCallback(
    (day: Date | undefined) => {
      if (day) {
        dispatch(setSelectedDate(day.toISOString()));
      }
    },
    [dispatch]
  );

  // 달력 이동 시 현재 표시되는 달을 업데이트
  const handleMonthChange = useCallback(
    (month: Date) => {
      setCurrentMonth(month);
      dispatch(setSelectedMonth(month.toISOString())); // Redux에 월 업데이트
    },
    [dispatch]
  );

  return (
    <div className="p-2 bg-white shadow-md rounded-lg max-w-[200px]">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={handleDaySelect}
        showOutsideDays
        locale={ko}
        month={currentMonth} // 현재 달
        onMonthChange={handleMonthChange} // 달력 이동 시 호출
        classNames={{
          root: "w-full !max-w-[200px]",
          day: "w-8 h-8 text-center !p-0 !m-0 !text-xs !rounded-full !hover:bg-gray-100",
          weekday: "text-xs font-semibold text-gray-500 text-center",
          head_cell: "!text-xs !font-semibold !text-gray-500 !text-center",
          selected: "w-8 h-8 !bg-blue-500 !text-white !rounded-full !m-auto",
          today: "w-8 h-8 !bg-blue-100 !text-blue-500 !rounded-full",
          day_button: "block m-auto",
          chevron: "w-4 h-4",
          button_previous: "pr-4",
        }}
        modifiersClassNames={{
          outside: "text-gray-300", // 현재 달력의 달 외부 날짜
          currentMonthDay: "text-black font-semibold", // 현재 달의 날짜
        }}
        styles={{
          day: {
            width: "28px",
            height: "28px",
            lineHeight: "28px",
            borderRadius: "50%",
            textAlign: "center",
          },
          caption: { fontSize: "14px", fontWeight: "600" },
        }}
        // 현재 표시되는 달을 기준으로 스타일 지정
        modifiers={{
          currentMonthDay: (date) => isSameMonth(date, currentMonth), // 현재 달력의 달과 일치하는 날짜
          outside: (date) => !isSameMonth(date, currentMonth), // 현재 달력의 달과 일치하지 않는 날짜
        }}
      />
    </div>
  );
};

export default DatePicker;

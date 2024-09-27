import React, { useCallback } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ko } from "react-day-picker/locale";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../redux/slices/calendarSlice";
import { RootState } from "../redux/store";

function DatePicker() {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state: RootState) => new Date(state.calendar.selectedDate) // ISO 문자열을 Date 객체로 변환
  );

  const handleDaySelect = useCallback(
    (day: Date | undefined) => {
      if (day) {
        dispatch(setSelectedDate(day.toISOString())); // Date 객체를 ISO 문자열로 변환하여 저장
      }
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
      />
    </div>
  );
}

export default React.memo(DatePicker);

import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  nextWeek,
  prevWeek,
  setToday,
  setSelectedMonth,
} from "@/redux/slices/calendarSlice";
import { getMonth } from "date-fns";

export const useNavigation = (selectedDate: Date, currentMonth: number) => {
  const dispatch = useDispatch();

  // 공통 로직: 주 이동 시 처리
  const handleWeekChange = useCallback(
    (days: number) => {
      const newDate = new Date(selectedDate);
      newDate.setDate(newDate.getDate() + days);

      // 월이 변경된 경우에만 currentMonth 업데이트
      if (getMonth(newDate) !== currentMonth) {
        dispatch(setSelectedMonth(newDate.toISOString()));
      }

      // 날짜 이동 방향에 따라 dispatch 호출
      if (days > 0) {
        dispatch(nextWeek());
      } else {
        dispatch(prevWeek());
      }
    },
    [selectedDate, currentMonth, dispatch]
  );

  // 오늘로 이동
  const handleTodayClick = useCallback(() => {
    dispatch(setToday());
    const today = new Date();
    dispatch(setSelectedMonth(today.toISOString()));
  }, [dispatch]);

  return {
    handleTodayClick,
    handlePrevWeekClick: () => handleWeekChange(-7),
    handleNextWeekClick: () => handleWeekChange(7),
  };
};

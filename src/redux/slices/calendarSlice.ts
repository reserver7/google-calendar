import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalendarState {
  selectedDate: string; // ISO 문자열 형식으로 저장
}

const initialState: CalendarState = {
  selectedDate: new Date().toISOString(), // 초기값을 ISO 문자열로 설정
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    nextWeek: (state) => {
      const nextWeek = new Date(state.selectedDate);
      nextWeek.setDate(nextWeek.getDate() + 7);
      state.selectedDate = nextWeek.toISOString();
    },
    prevWeek: (state) => {
      const prevWeek = new Date(state.selectedDate);
      prevWeek.setDate(prevWeek.getDate() - 7);
      state.selectedDate = prevWeek.toISOString();
    },
    setToday: (state) => {
      state.selectedDate = new Date().toISOString(); // 현재 날짜로 설정
    },
  },
});

export const { setSelectedDate, nextWeek, prevWeek, setToday } =
  calendarSlice.actions;
export default calendarSlice.reducer;

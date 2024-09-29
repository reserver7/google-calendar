import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalendarState, Event, UpdateEventPayload } from "@/types/types";

const initialState: CalendarState = {
  selectedDate: new Date().toISOString(),
  currentMonth: new Date().toISOString(),
  events: [],
};

const updateDate = (state: CalendarState, days: number) => {
  const newDate = new Date(state.selectedDate);
  newDate.setDate(newDate.getDate() + days);
  state.selectedDate = newDate.toISOString();
  state.currentMonth = newDate.toISOString();
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    setToday: (state) => {
      const today = new Date().toISOString();
      state.selectedDate = today;
      state.currentMonth = today;
    },
    nextWeek: (state) => updateDate(state, 7),
    prevWeek: (state) => updateDate(state, -7),
    setSelectedMonth: (state, action: PayloadAction<string>) => {
      state.currentMonth = action.payload;
    },
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    removeEvent: (state, action: PayloadAction<number>) => {
      state.events = state.events.filter(
        (_, index) => index !== action.payload
      );
    },
    updateEvent: (state, action: PayloadAction<UpdateEventPayload>) => {
      const { index, updatedEvent } = action.payload;
      state.events[index] = updatedEvent;
    },
  },
});

export const {
  setSelectedDate,
  setToday,
  nextWeek,
  prevWeek,
  setSelectedMonth,
  addEvent,
  removeEvent,
  updateEvent,
} = calendarSlice.actions;

export default calendarSlice.reducer;

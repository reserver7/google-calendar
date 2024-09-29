import { useState, useCallback, useMemo } from "react";
import { addDays, format, startOfWeek } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeEvent, updateEvent } from "@/redux/slices/calendarSlice";
import { Event, TabType } from "@/types/types";

export const useWeekCalendar = () => {
  const dispatch = useDispatch();

  const selectedDate = useSelector(
    (state: RootState) => new Date(state.calendar.selectedDate)
  );
  const events = useSelector((state: RootState) => state.calendar.events);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState<string | null>(
    null
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // 날짜 계산: startOfWeek를 사용하여 선택된 주의 첫 번째 날을 구함
  const startOfSelectedWeek = startOfWeek(selectedDate, { weekStartsOn: 0 });

  // daysOfWeek는 한 번 계산되면 재사용 가능하므로 useMemo를 사용
  const daysOfWeek = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(startOfSelectedWeek, i)),
    [startOfSelectedWeek]
  );

  // 시간 슬롯 클릭 핸들러
  const handleTimeSlotClick = useCallback(
    (day: Date, hour: number, minute: number) => {
      const startTime = new Date(day);
      startTime.setHours(hour);
      startTime.setMinutes(minute);

      const endTime = new Date(day);
      endTime.setHours(hour);
      endTime.setMinutes(minute + 30);

      setSelectedStartTime(format(startTime, "yyyy-MM-dd HH:mm"));
      setSelectedEndTime(format(endTime, "yyyy-MM-dd HH:mm"));
      setIsModalOpen(true);
    },
    []
  );

  // 이벤트 클릭 핸들러
  const handleEventClick = useCallback((event: Event) => {
    setSelectedEvent(event);
    setIsDetailsModalOpen(true);
  }, []);

  // 이벤트 삭제 핸들러
  const handleDeleteEvent = useCallback(
    (index: number) => {
      dispatch(removeEvent(index));
      setIsDetailsModalOpen(false);
    },
    [dispatch]
  );

  // 이벤트 업데이트 핸들러
  const handleUpdateEvent = useCallback(
    (updatedEvent: Event) => {
      if (selectedEvent) {
        const eventIndex = events.indexOf(selectedEvent);
        dispatch(updateEvent({ index: eventIndex, updatedEvent }));
        setIsDetailsModalOpen(false);
      }
    },
    [selectedEvent, events, dispatch]
  );

  // 모달 닫기 핸들러
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedStartTime(null);
    setSelectedEndTime(null);
  }, []);

  // 이벤트 스타일 계산
  const getEventStyle = useCallback((startTime: string, endTime: string) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const startHour = start.getHours();
    const startMinutes = start.getMinutes();
    const durationInMinutes = (end.getTime() - start.getTime()) / 60000;

    return {
      top: `${((startHour * 60 + startMinutes) / (24 * 60)) * 100}%`,
      height: `${(durationInMinutes / (24 * 60)) * 100}%`,
      left: "10%",
      right: "10%",
    };
  }, []);

  // 이벤트 색상 반환
  const getEventColor = useCallback((type: TabType) => {
    switch (type) {
      case "event":
        return "bg-blue-800 opacity-80";
      case "task":
        return "bg-blue-500";
      case "alert":
        return "bg-green-900 opacity-80";
      default:
        return "bg-gray-500";
    }
  }, []);

  return {
    daysOfWeek,
    events,
    isModalOpen,
    isDetailsModalOpen,
    setIsDetailsModalOpen,
    selectedStartTime,
    selectedEndTime,
    selectedEvent,
    handleTimeSlotClick,
    handleEventClick,
    handleDeleteEvent,
    handleUpdateEvent,
    closeModal,
    getEventStyle,
    getEventColor,
  };
};

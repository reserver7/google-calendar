export type TabType = "event" | "task" | "alert";

// Event 타입
export type Event = {
  title: string;
  startTime: string;
  endTime: string;
  type: TabType;
};

// CalendarState 타입
export type CalendarState = {
  selectedDate: string;
  currentMonth: string;
  events: Event[];
};

// UpdateEventPayload 타입
export type UpdateEventPayload = {
  index: number;
  updatedEvent: Event;
};

// Modal 공통 Props 타입
export type UseEventModalProps = {
  initialStartTime?: string;
  initialEndTime?: string;
  event?: Event;
  onClose: () => void;
  onUpdate?: (updatedEvent: Event) => void;
  onDelete?: () => void;
};

// NavigationButtons Props 타입
export type NavigationButtonsProps = {
  selectedDate: Date;
  currentMonth: number;
};

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "@/redux/slices/calendarSlice";
import { TabType, Event, UseEventModalProps } from "@/types/types";

export const useEventModal = ({
  initialStartTime = "",
  initialEndTime = "",
  event,
  onClose,
  onUpdate,
  onDelete,
}: UseEventModalProps) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>(event?.title || "");
  const [startTime, setStartTime] = useState<string>(
    event?.startTime || initialStartTime
  );
  const [endTime, setEndTime] = useState<string>(
    event?.endTime || initialEndTime
  );
  const [activeTab, setActiveTab] = useState<TabType>(event?.type || "event");

  const isEditMode = !!event;

  // 이벤트 저장 핸들러 (편집 및 추가 모드를 통합)
  const handleSave = () => {
    if (title && startTime && endTime) {
      const eventToSave: Event = { title, startTime, endTime, type: activeTab };
      if (isEditMode && onUpdate) {
        onUpdate(eventToSave);
      } else {
        dispatch(addEvent(eventToSave));
      }
      onClose();
    }
  };

  // 이벤트 삭제 핸들러 (편집 모드에서만 실행)
  const handleDelete = () => {
    if (isEditMode && onDelete) {
      onDelete();
      onClose();
    }
  };

  // 탭 클래스 동적으로 적용
  const tabClasses = (tab: TabType) =>
    `px-4 py-2 rounded-md ${
      activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
    }`;

  return {
    title,
    setTitle,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    activeTab,
    setActiveTab,
    handleSave,
    handleDelete,
    tabClasses,
    isEditMode,
  };
};

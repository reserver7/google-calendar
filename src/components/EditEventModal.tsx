import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEventModal } from "@/hooks/useEventModal";
import { UseEventModalProps } from "@/types/types";

const EditEventModal = ({
  event,
  onClose,
  onUpdate,
  onDelete,
}: UseEventModalProps) => {
  const {
    title,
    setTitle,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    setActiveTab,
    handleSave,
    handleDelete,
    tabClasses,
  } = useEventModal({ event, onClose, onUpdate, onDelete });

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl">
        <div className="p-4 border-b border-gray-300 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Calendar Edit</h2>
          <div className="flex space-x-4">
            <button
              onClick={handleDelete}
              className="text-gray-500 hover:text-gray-600"
              title="Delete Event"
            >
              <FaRegTrashAlt className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              title="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-4 pt-4">
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
          />
        </div>

        <div className="px-4 pt-4 flex space-x-2">
          <button
            onClick={() => setActiveTab("event")}
            className={tabClasses("event")}
          >
            이벤트
          </button>
          <button
            onClick={() => setActiveTab("task")}
            className={tabClasses("task")}
          >
            할 일
          </button>
          <button
            onClick={() => setActiveTab("alert")}
            className={tabClasses("alert")}
          >
            알림
          </button>
        </div>

        <div className="px-4 py-4 text-sm">
          <div className="flex flex-col space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              시작 시간
            </label>
            <input
              type="datetime-local"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-2 mt-4">
            <label className="block text-sm font-medium text-gray-700">
              종료 시간
            </label>
            <input
              type="datetime-local"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        <div className="px-4 py-4 flex justify-end items-center border-t border-gray-300 space-x-2">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleSave}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEventModal;

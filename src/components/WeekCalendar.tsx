import React from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import AddEventModal from "./AddEventModal";
import EditEventModal from "./EditEventModal";
import { useWeekCalendar } from "@/hooks/useWeekCalendar";

const hours: string[] = Array.from({ length: 24 }, (_, i) =>
  i === 0 ? "12 AM" : `${i < 12 ? i : i - 12} ${i < 12 ? "AM" : "PM"}`
);

const WeekCalendar = () => {
  const {
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
  } = useWeekCalendar();

  return (
    <div className="relative flex flex-col w-full">
      <div
        className="flex z-10"
        style={{ position: "sticky", top: 0, backgroundColor: "#fff" }}
      >
        <div className="w-12"></div>
        <div className="grid grid-cols-7 w-full border-b border-gray-300">
          {daysOfWeek.map((date, dayIndex) => (
            <div
              key={dayIndex}
              className="text-center p-2 text-lg font-medium flex flex-col items-center justify-center h-20"
            >
              <div className="text-sm text-gray-500">
                {format(date, "E", { locale: ko })}
              </div>
              <div className="text-2xl text-gray-900">{format(date, "dd")}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-grow overflow-auto z-0">
        <div className="w-12 flex flex-col border-r border-gray-300">
          {hours.map((hour: string, index: number) => (
            <div
              key={index}
              className="text-xs text-gray-500 flex items-start"
              style={{ height: "100px" }}
            >
              <div>{hour}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 flex-grow relative">
          {daysOfWeek.map((date, dayIndex) => (
            <div
              key={dayIndex}
              className="relative flex flex-col border-l border-gray-300"
            >
              {hours.map((_, hourIndex: number) => (
                <React.Fragment key={hourIndex}>
                  <div
                    className="relative border-b border-gray-200 cursor-pointer"
                    style={{ height: "50px" }}
                    onClick={() => handleTimeSlotClick(date, hourIndex, 0)}
                  ></div>
                  <div
                    className="relative border-b border-gray-200 cursor-pointer"
                    style={{ height: "50px" }}
                    onClick={() => handleTimeSlotClick(date, hourIndex, 30)}
                  ></div>
                </React.Fragment>
              ))}

              {events
                .filter(
                  (event) =>
                    format(new Date(event.startTime), "yyyy-MM-dd") ===
                    format(date, "yyyy-MM-dd")
                )
                .map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`absolute text-white p-2 rounded-lg shadow-lg cursor-pointer ${getEventColor(
                      event.type
                    )} overflow-hidden text-ellipsis whitespace-nowrap`}
                    style={getEventStyle(event.startTime, event.endTime)}
                    onClick={() => handleEventClick(event)}
                  >
                    {event.title} <br />
                    {format(new Date(event.startTime), "hh:mm a")} -{" "}
                    {format(new Date(event.endTime), "hh:mm a")}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedStartTime && selectedEndTime && (
        <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <AddEventModal
            initialStartTime={selectedStartTime}
            initialEndTime={selectedEndTime}
            onClose={closeModal}
          />
        </div>
      )}

      {isDetailsModalOpen && selectedEvent && (
        <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <EditEventModal
            event={selectedEvent}
            onClose={() => setIsDetailsModalOpen(false)}
            onDelete={() => handleDeleteEvent(events.indexOf(selectedEvent))}
            onUpdate={handleUpdateEvent}
          />
        </div>
      )}
    </div>
  );
};

export default WeekCalendar;

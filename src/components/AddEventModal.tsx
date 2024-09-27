import React, { useState } from "react";

const AddEventModal: React.FC = () => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">제목 추가</h2>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg p-2 w-full mb-4"
        />
        <label className="block text-sm font-medium mb-1">시간</label>
        <div className="flex space-x-4 mb-4">
          <input
            type="datetime-local"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
          <input
            type="datetime-local"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>
        <button className="bg-blue-500 text-white w-full p-2 rounded-lg">
          저장
        </button>
      </div>
    </div>
  );
};

export default AddEventModal;

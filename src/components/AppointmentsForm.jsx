import React, { useState } from "react";

function AppointmentForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newEvent = {
      title,
      start: new Date(`${startDate}T${startTime}`),
      end: new Date(`${startDate}T${endTime}`),
    };

    addEvent(newEvent);
    setTitle("");
    setStartDate("");
    setStartTime("");
    setEndTime("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-lg font-semibold mb-4">Aggiungi un Appuntamento</h2>
      <input
        type="text"
        placeholder="Titolo dell'appuntamento"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="mb-2 p-2 w-full border border-gray-300 rounded-lg"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
        className="mb-2 p-2 w-full border border-gray-300 rounded-lg"
      />
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
        className="mb-2 p-2 w-full border border-gray-300 rounded-lg"
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
        className="mb-2 p-2 w-full border border-gray-300 rounded-lg"
      />
      <button
        type="submit"
        className="bg-red-400 text-white p-2 w-full rounded-lg hover:bg-red-700"
      >
        Aggiungi Appuntamento
      </button>
    </form>
  );
}

export default AppointmentForm;

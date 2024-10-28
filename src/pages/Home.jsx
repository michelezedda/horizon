import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import AppointmentForm from "../components/AppointmentForm";
import myMinimalLogo from "../../public/minimal-logo.png";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Home() {
  const [userName, setUserName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [events, setEvents] = useState("");

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsNameEntered(true);
  };

  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen ">
        <div className="container">
          {!isNameEntered ? (
            <form
              onSubmit={handleNameSubmit}
              className="max-w-md mx-auto bg-white p-4 shadow-lg rounded-lg mt-40"
            >
              <img
                src={myMinimalLogo}
                alt="horizon minimal logo"
                className="h-20 left-[-44px] top-[-65px] relative"
              />
              <h2 className="text-xl font-bold mb-4">Insert your name</h2>
              <input
                type="text"
                placeholder="Your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-400 text-white p-2 rounded-lg  hover:bg-red-700"
              >
                Submit
              </button>
            </form>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-center mb-8 mt-6 text-gray-500">
                Welcome, <span className="text-red-500">{userName}</span>!
              </h2>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                className="bg-white p-4 shadow-lg rounded-lg"
              />
              <AppointmentForm addEvent={addEvent} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

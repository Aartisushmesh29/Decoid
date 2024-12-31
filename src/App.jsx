import React, { useState } from "react";
import Calendar from "./components/Calendar.jsx";
import EventModal from "./components/EventModel.jsx";
import EventList from "./components/EventList.jsx";

// App component
const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Dynamic Event Calendar</h1>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {selectedDate && (
        <div className="mt-6">
          <EventList date={selectedDate} />
          <EventModal date={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
      )}
    </div>
  );
};

export default App;

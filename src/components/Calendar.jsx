import React, { useState } from "react";
import { getDaysInMonth } from "../utils/dateUtils";
import classNames from "classnames";

/**
 * Calendar Component
 * Displays a calendar for the current month, allowing navigation between months 
 * and selection of individual dates.
 * 
 * Props:
 * - selectedDate: The currently selected date.
 * - setSelectedDate: Function to update the selected date.
 */
const Calendar = ({ selectedDate, setSelectedDate }) => {
  // State to track the currently displayed month
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Array of day objects for the current month
  const days = getDaysInMonth(currentMonth);

  /**
   * Navigate to the previous month by adjusting the currentMonth state.
   */
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  /**
   * Navigate to the next month by adjusting the currentMonth state.
   */
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  

  return (
    <div>
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Previous
        </button>
        <h2 className="text-xl font-semibold text-gray-700">
          {currentMonth.toLocaleDateString("default", { month: "long", year: "numeric" })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold text-gray-600">{day}</div>
        ))}

        {/* Days of the Month */}
        {days.map((day, index) => (
          <div
            key={index}
            className={classNames(
              "p-2 border rounded-lg text-center cursor-pointer",
              {
                "bg-blue-200": day.isToday, // Highlight today's date
                "bg-yellow-200": selectedDate?.toDateString() === day.date?.toDateString(), // Highlight the selected date
              }
            )}
            onClick={() => setSelectedDate(day.date)} // Update the selected date on click
          >
            {day.date?.getDate()} {/* Display the day of the month */}
          </div>
        ))}
      </div>


      
    </div>
    
  );
};

export default Calendar;

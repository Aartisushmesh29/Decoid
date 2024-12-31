import React, { useState } from "react";

/**
 * EventModal Component
 * Provides a modal interface for adding a new event to the selected date.
 * 
 * Props:
 * - date: The currently selected date for which the event is being added.
 * - setSelectedDate: Function to update the selected date (used for closing the modal).
 */
const EventModal = ({ date, setSelectedDate }) => {
  // State for form fields
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  /**
   * Save the event to localStorage.
   * - Retrieves existing events from localStorage or initializes an empty object.
   * - Adds the new event to the corresponding date key.
   * - Updates localStorage and closes the modal.
   */
  const handleSaveEvent = () => {
    const events = JSON.parse(localStorage.getItem("events")) || {}; // Retrieve events or initialize
    const dayKey = date.toDateString(); // Unique key for the selected day

    // Initialize dayKey if not already present
    if (!events[dayKey]) events[dayKey] = [];

    // Add the new event
    events[dayKey].push({ eventName, startTime, endTime, description });

    // Save updated events to localStorage
    localStorage.setItem("events", JSON.stringify(events));

    // Close the modal
    setSelectedDate(null);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        {/* Modal Title */}
        <h3 className="text-xl font-bold mb-4">Add Event</h3>

        {/* Event Name Input */}
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full mb-2 p-2 border rounded-md"
        />

        {/* Start Time Input */}
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="w-full mb-2 p-2 border rounded-md"
        />

        {/* End Time Input */}
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="w-full mb-2 p-2 border rounded-md"
        />

        {/* Event Description Input */}
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-2 p-2 border rounded-md"
        />

        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          {/* Save Button */}
          <button
            onClick={handleSaveEvent}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Save
          </button>

          {/* Cancel Button */}
          <button
            onClick={() => setSelectedDate(null)} // Close modal
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>



    </div>
  );
};

export default EventModal;

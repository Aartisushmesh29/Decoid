import React from "react";

/**
 * EventList Component
 * Displays a list of events for the selected date.
 * 
 * Props:
 * - date: The currently selected date whose events are to be displayed.
 */
const EventList = ({ date }) => {
  // Retrieve events from localStorage or initialize as an empty object
  const events = JSON.parse(localStorage.getItem("events")) || {};
  
  // Generate a unique key for the selected day to access its events
  const dayKey = date.toDateString();
  
  // Fetch the events for the selected day, or default to an empty array
  const dayEvents = events[dayKey] || [];

  return (
    <div>
      {/* Header displaying the selected date */}
      <h3 className="font-bold">Events for {dayKey}</h3>
      
      {/* Event List */}
      <ul>
        {dayEvents.map((event, index) => (
          <li key={index}>
            {/* Event Name */}
           <b>Event Name : </b> <p>{event.eventName}</p>
            
            {/* Event Timing */}
            <p>
             <b>Time Duration : </b> {event.startTime} - {event.endTime}
            </p>
            
            {/* Event Description */}
            <b>Event Details : </b><p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;




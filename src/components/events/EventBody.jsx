import axios from "axios";
import React, { useState } from "react";
import { useEvent } from "../../context/eventContext";

const EventBody = () => {
  const { events, fetchEvents } = useEvent();
  const { id } = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Your Events</h1>
        <button
          onClick={fetchEvents}
          className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Load Events
        </button>
      </div>

      <div className="text-sm text-gray-500 mb-4">User ID: {id}</div>

      <div className="space-y-4">
        {events.length === 0 ? (
          <div className="text-gray-400 text-center">No events to display.</div>
        ) : (
          events.map(({ event_name, event_description, event_date }, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
            >
              <div className="text-lg font-semibold text-gray-900">
                {event_name}
              </div>
              <div className="text-gray-600 mt-1">{event_description}</div>
              <div className="text-sm text-gray-400 mt-2">📅 {event_date}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventBody;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useEvent } from "../../context/eventContext";
import NavigationButtons from "../NavigationButtons";

const EventBody = () => {
  const { events, fetchEvents } = useEvent();
  const { id, firstName } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white border border-gray-100 rounded-2xl shadow-sm mt-10">
      <header className="flex items-center justify-between mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-neutral-800">
          Hello, {firstName}
        </h1>
      </header>

      <div className="mb-6">
        <NavigationButtons />
      </div>

      <div className="text-sm text-neutral-400 mb-10">User ID: {id}</div>

      <section className="grid gap-6">
        {events.length === 0 ? (
          <div className="text-center text-neutral-400 border border-dashed border-neutral-300 py-12 rounded-lg">
            No events available at the moment.
          </div>
        ) : (
          events.map(({ event_name, event_description, event_date }, idx) => (
            <article
              key={idx}
              className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl hover:shadow-md transition duration-200"
            >
              <h2 className="text-xl font-semibold text-neutral-800">
                {event_name}
              </h2>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                {event_description}
              </p>
              <time className="block text-xs text-neutral-500 mt-4">
                📅 {event_date}
              </time>
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default EventBody;

import axios from "axios";
import React, { useState } from "react";

const EventBody = () => {
  const [events, setEvents] = useState([]);

  const { id } = JSON.parse(localStorage.getItem("user"));

  const getEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/events", {
        params: { user_id: id },
      });
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div>
      <button onClick={getEvents}>Get the events</button>
      <div>The id is: {id}</div>
      {events.map(({ event_name, event_description, event_date }, idx) => (
        <div key={idx}>
          <div>{event_name}</div>
          <div>{event_description}</div>
          <div>{event_date}</div>
        </div>
      ))}
    </div>
  );
};

export default EventBody;

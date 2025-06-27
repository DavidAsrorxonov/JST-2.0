import { createContext, useState, useContext } from "react";
import axios from "axios";
import { addToast } from "@heroui/toast";
import { API_URL } from "../constants/api";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const user = localStorage.getItem("user");
    const { id } = JSON.parse(user);

    const token = localStorage.getItem("token");

    if (!token) {
      addToast({
        description: "You are not logged in",
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
      return;
    }

    const response = await axios.get(`${API_URL}/api/events`, {
      params: {
        user_id: id,
      },
    });

    setEvents(response.data);
  };

  return (
    <EventContext.Provider value={{ events, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);

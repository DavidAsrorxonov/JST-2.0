import { createContext, useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "../constants/api";
import Toast from "../components/ui/Toast";
import { useUser } from "./userContext";
import { authChecker } from "../lib/utils/authChecker";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const { logout } = useUser();

  const fetchEvents = async () => {
    if (!authChecker(logout)) {
      return;
    }

    const user = localStorage.getItem("user");
    const { id } = JSON.parse(user);

    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/api/events`, {
      params: {
        user_id: id,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

import { createContext, useState, useContext } from "react";

const ReminderContext = createContext();

export const ReminderProvider = ({ children }) => {
  const [reminderEvent, setReminderEvent] = useState([]);

  return (
    <ReminderContext.Provider value={{ reminderEvent, setReminderEvent }}>
      {children}
    </ReminderContext.Provider>
  );
};

export const useReminder = () => useContext(ReminderContext);

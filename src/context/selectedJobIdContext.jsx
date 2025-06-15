import { createContext, useState, useContext } from "react";

const SelectJobIdContext = createContext();

export const SelectJobIdProvider = ({ children }) => {
  const [selectedJobId, setSelectedJobId] = useState([]);

  return (
    <SelectJobIdContext.Provider value={{ selectedJobId, setSelectedJobId }}>
      {children}
    </SelectJobIdContext.Provider>
  );
};

export const useSelectedJobId = () => useContext(SelectJobIdContext);

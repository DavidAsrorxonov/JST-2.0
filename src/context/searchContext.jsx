import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobStatus, setJobStatus] = useState("all");
  const [jobType, setJobType] = useState("all");
  const [sortingType, setSortingType] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        jobStatus,
        setJobStatus,
        jobType,
        setJobType,
        sortingType,
        setSortingType,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

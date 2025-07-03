import { createContext, useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "../constants/api";
import Toast from "../components/ui/Toast";
import { useUser } from "./userContext";
import { authChecker } from "../lib/utils/authChecker";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const { logout } = useUser();

  const fetchJobs = async () => {
    if (!authChecker(logout)) {
      return;
    }

    const user = localStorage.getItem("user");
    const { id } = JSON.parse(user);

    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/api/jobs`, {
      params: {
        user_id: id,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    setJobs(response.data);
  };

  return (
    <JobContext.Provider value={{ jobs, fetchJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => useContext(JobContext);

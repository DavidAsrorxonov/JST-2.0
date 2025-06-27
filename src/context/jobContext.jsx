import { createContext, useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "../constants/api";
import Toast from "../components/ui/Toast";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const user = localStorage.getItem("user");
    const { id } = JSON.parse(user);

    const token = localStorage.getItem("token");

    if (!token) {
      Toast({
        desciption: "You are not logged in",
        color: "danger",
      });
      return;
    }

    const response = await axios.get(`${API_URL}/api/jobs`, {
      params: {
        user_id: id,
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

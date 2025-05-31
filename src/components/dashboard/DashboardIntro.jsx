import React, { useEffect } from "react";
import { useJob } from "../../context/jobContext";

const DashboardIntro = () => {
  const { fetchJobs } = useJob();

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="m-10">
      <div className="text-5xl font-extrabold">Dashboard</div>
      <span className="text-lg text-[#47569E]">
        Manage your job applications and track your progress
      </span>
    </div>
  );
};

export default DashboardIntro;

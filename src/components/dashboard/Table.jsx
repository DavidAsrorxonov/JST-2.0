import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../../context/userContext";
import { addToast } from "@heroui/toast";
import { Plus } from "lucide-react";
import Dropdown from "./Dropdown";
import { useJob } from "../../context/jobContext";

const Table = () => {
  const { fetchJobs, jobs } = useJob();
  const user = localStorage.getItem("user");
  const { id } = JSON.parse(user);

  const tableHead = [
    "Job Title",
    "Company",
    "Application Date",
    "Status",
    "Job Type",
    "Website URL",
  ];

  return (
    <div>
      <button onClick={fetchJobs}>Press</button>
      <div>
        {jobs.map(
          ({
            id,
            job_title,
            company,
            applied_at,
            job_status,
            job_type,
            website_url,
          }) => (
            <div
              key={id}
              className="flex items-center justify-start w-full border-1 border-black py-2 rounded-b-2xl px-2 cursor-pointer"
            >
              <span className="ml-2">{job_title}</span>
              <span className="ml-2">{company}</span>
              <span className="ml-2">{applied_at}</span>
              <span className="ml-2">{job_status}</span>
              <span className="ml-2">{job_type}</span>
              <span className="ml-2">{website_url}</span>
            </div>
          )
        )}
      </div>
      <div className="flex items-center justify-start w-full border-1 border-black py-2 rounded-b-2xl px-2 cursor-pointer">
        <Plus size={20} />
        <span className="ml-2">Add Job</span>
      </div>
      <div>
        <Dropdown
          values={["Option 1", "Option 2", "Option 3"]}
          onChange={console.log("Changed")}
        />
      </div>
    </div>
  );
};

export default Table;

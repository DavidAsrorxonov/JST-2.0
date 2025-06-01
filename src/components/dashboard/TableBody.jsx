import React, { useState } from "react";
import { useJob } from "../../context/jobContext";
import { Plus, SquareArrowOutUpRight } from "lucide-react";
import { addToast } from "@heroui/toast";
import axios from "axios";

const TableBody = () => {
  const { jobs, fetchJobs } = useJob();
  const { id } = JSON.parse(localStorage.getItem("user"));

  return (
    <>
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
          <tr
            key={id}
            className="text-black border-b-1.5 border-gray-500 border-r-gray-500 last:border-r-0"
          >
            <td className="border-r border-gray-500 last:border-r-0 relative group">
              <input
                defaultValue={job_title}
                className="px-3 py-0.5 focus:outline-blue-300 w-[90%] cursor-text"
              />
            </td>
            <td className="border-r border-gray-500 last:border-r-0">
              <input
                defaultValue={company}
                className="py-0.5 px-3 focus:outline-blue-300 cursor-text w-[90%]"
              />
            </td>
            <td className="p-3 border-r border-gray-500 last:border-r-0">
              {applied_at.split("T")[0]}
            </td>
            <td className="border-r border-gray-500 last:border-r-0">
              <select className="py-0.5 px-3 focus:outline-blue-300">
                <option value="Applied" selected={job_status === "Applied"}>
                  Applied
                </option>
                <option value="Interview" selected={job_status === "Interview"}>
                  Interview
                </option>
                <option value="Offer" selected={job_status === "Offer"}>
                  Offer
                </option>
                <option value="Rejected" selected={job_status === "Rejected"}>
                  Rejected
                </option>
              </select>
            </td>
            <td className="border-r border-gray-500 last:border-r-0">
              <select className="py-0.5 px-3 focus:outline-blue-300">
                <option value="Full-time" selected={job_type === "Full-time"}>
                  Full-time
                </option>
                <option value="Part-time" selected={job_type === "Part-time"}>
                  Part-time
                </option>
                <option value="Internship" selected={job_type === "Internship"}>
                  Internship
                </option>
                <option value="Contract" selected={job_type === "Contract"}>
                  Contract
                </option>
              </select>
            </td>
            <td className="p-3">
              <div className="flex items-center justify-between">
                <input
                  defaultValue={website_url}
                  className="py-0.5 px-3 focus:outline-blue-300 cursor-text w-[90%]"
                />
                <a href={website_url}>
                  <SquareArrowOutUpRight size={20} />
                </a>
              </div>
            </td>
          </tr>
        )
      )}
    </>
  );
};

export default TableBody;

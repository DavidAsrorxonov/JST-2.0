import React, { useState } from "react";
import { useJob } from "../../context/jobContext";
import { Plus } from "lucide-react";
import { addToast } from "@heroui/toast";
import axios from "axios";

const TableBody = () => {
  const { jobs, fetchJobs } = useJob();
  const [newRow, setNewRow] = useState([]);
  const { id } = JSON.parse(localStorage.getItem("user"));

  const handleAddNewRow = () => {
    setNewRow([
      ...newRow,
      {
        job_title: "",
        company: "",
        applied_at: "",
        job_status: "",
        job_type: "",
        website_url: "",
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...newRow];
    updatedRows[index][field] = value;
    setNewRow(updatedRows);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    if (!token || !id) {
      addToast({
        title: "Error",
        description: "You are not logged in",
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
      return;
    }

    try {
      const jobsWithUserId = newRow.map((row) => ({
        ...row,
        user_id: id,
      }));

      await Promise.all(
        jobsWithUserId.map((row) =>
          axios.post("http://localhost:3000/api/jobs", row, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        )
      );

      addToast({
        title: "Success",
        description: "Job(s) saved successfully",
        color: "success",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });

      setNewRow([]);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

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
          <tr key={id} className="text-[#47569E] border border-b-[#CED2E9]">
            <td className="p-3 text-black">{job_title}</td>
            <td className="p-3">{company}</td>
            <td className="p-3">{applied_at.split("T")[0]}</td>
            <td className="p-3">{job_status}</td>
            <td className="p-3">{job_type}</td>
            <td className="p-3">{website_url}</td>
          </tr>
        )
      )}

      {newRow.map((row, index) => (
        <tr key={`new-${index}`} className="border border-[#CED2E9]">
          <td>
            <input
              type="text"
              value={row.job_title}
              onChange={(e) =>
                handleInputChange(index, "job_title", e.target.value)
              }
              className="px-2 py-1 w-full outline-none"
              placeholder="Job Title"
            />
          </td>
          <td>
            <input
              type="text"
              value={row.company}
              onChange={(e) =>
                handleInputChange(index, "company", e.target.value)
              }
              className="px-2 py-1 w-full"
              placeholder="Company"
            />
          </td>
          <td>
            <input
              type="text"
              value={row.applied_at}
              onChange={(e) =>
                handleInputChange(index, "applied_at", e.target.value)
              }
              className="px-2 py-1 w-full"
              placeholder="YYYY/MM/DD"
            />
          </td>
          <td>
            <input
              type="text"
              value={row.job_status}
              onChange={(e) =>
                handleInputChange(index, "job_status", e.target.value)
              }
              className="px-2 py-1 w-full"
              placeholder="Status"
            />
          </td>
          <td>
            <input
              type="text"
              value={row.job_type}
              onChange={(e) =>
                handleInputChange(index, "job_type", e.target.value)
              }
              className="px-2 py-1 w-full"
              placeholder="Job Type"
            />
          </td>
          <td>
            <input
              type="url"
              value={row.website_url}
              onChange={(e) =>
                handleInputChange(index, "website_url", e.target.value)
              }
              className="px-2 py-1 w-full"
              placeholder="Website URL"
            />
          </td>
        </tr>
      ))}

      <tr>
        <td>
          <div
            onClick={handleAddNewRow}
            className="w-full cursor-pointer px-4 py-2 flex items-center justify-start gap-2"
          >
            <Plus />
            Add
          </div>
        </td>
      </tr>
      {newRow.length > 0 && (
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      )}
    </>
  );
};

export default TableBody;

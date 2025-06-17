import React from "react";
import { useState } from "react";
import Dropdown from "../todo/Dropdown";

const JobEditModal = ({ job, onSave, onClose }) => {
  const [editedJob, setEditedJob] = useState({ ...job });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedJob);
    onClose();
  };

  const jobtypes = ["Full-time", "Part-time", "Internship", "Contract"];
  const jobstatuses = ["Applied", "Interview", "Offer", "Rejected"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit Job</h2>
        <input
          name="job_title"
          value={editedJob.job_title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full p-2 border mb-2"
        />
        <input
          name="company"
          value={editedJob.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full p-2 border mb-2"
        />
        <Dropdown
          defaultValue={"Type"}
          options={jobtypes}
          onSelect={(jobtype) =>
            setEditedJob({ ...editedJob, job_type: jobtype })
          }
        />

        <Dropdown
          defaultValue={"Status"}
          options={jobstatuses}
          onSelect={(jobstatus) =>
            setEditedJob({ ...editedJob, job_status: jobstatus })
          }
        />
        <input
          name="website_url"
          value={editedJob.website_url}
          onChange={handleChange}
          placeholder="Website URL"
          className="w-full p-2 border mb-2"
        />
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobEditModal;

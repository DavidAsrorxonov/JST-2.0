import { addToast } from "@heroui/toast";
import axios from "axios";
import { PlusCircle, TrashIcon, X } from "lucide-react";
import React, { useState } from "react";
import { useJob } from "../../context/jobContext";

const TableActions = () => {
  const [addNewJobModal, setAddNewJobModal] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [appliedAt, setAppliedAt] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [jobType, setJobType] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const { id } = JSON.parse(localStorage.getItem("user"));

  const { fetchJobs } = useJob();

  const payload = {
    job_title: newJobTitle,
    company: newCompany,
    applied_at: appliedAt,
    job_status: jobStatus,
    job_type: jobType,
    website_url: websiteUrl,
    user_id: id,
  };

  const handleAddJob = async () => {
    if (
      !newJobTitle ||
      !newCompany ||
      !appliedAt ||
      !jobStatus ||
      !jobType ||
      !websiteUrl
    ) {
      addToast({
        title: "Error",
        description: "All fields are required",
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/jobs",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        addToast({
          title: "Success",
          description: "Job added successfully",
          color: "success",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
        });
      }
      await fetchJobs();
      setAddNewJobModal(false);
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <div className="w-full flex justify-start mx-10">
      <div
        className="w-fit flex items-center gap-2 text-xl bg-blue-100 border border-blue-500 px-6 py-1 rounded-md text-blue-600 hover:bg-blue-200 cursor-pointer transition-all duration-300"
        onClick={() => setAddNewJobModal(true)}
      >
        <PlusCircle size={20} />
        Add a new job
      </div>

      {addNewJobModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setAddNewJobModal(false)}
          ></div>

          <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-6 w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Job</h2>
              <button onClick={() => setAddNewJobModal(false)}>
                <X className="text-gray-600 hover:text-black" />
              </button>
            </div>
            <div id="form" className="space-y-4 text-sm text-gray-700">
              <div>
                <label className="block mb-1 font-medium">Job Title</label>
                <input
                  value={newJobTitle}
                  onChange={(e) => setNewJobTitle(e.target.value)}
                  type="text"
                  className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter job title"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Company</label>
                <input
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  type="text"
                  className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Applied At</label>
                <input
                  value={appliedAt}
                  onChange={(e) => setAppliedAt(e.target.value)}
                  type="date"
                  className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Job Status</label>
                <select
                  className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={jobStatus}
                  onChange={(e) => setJobStatus(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select status
                  </option>
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Job Type</label>
                <select
                  className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select type
                  </option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Website URL</label>
                <input
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  type="url"
                  className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter website URL"
                />
              </div>

              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  onClick={handleAddJob}
                >
                  Add Job
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TableActions;

import { addToast } from "@heroui/toast";
import axios from "axios";
import { Plus, PlusCircle, X } from "lucide-react";
import { useState } from "react";
import { useJob } from "../../context/jobContext";
import { useSearch } from "../../context/searchContext";
import { useTranslation } from "react-i18next";
import { API_URL } from "../../constants/api";
import Dropdown from "../todo/Dropdown";
import { jobstatuses, jobtypes } from "../../constants/jobConstants";

const TableActions = () => {
  const [addNewJobModal, setAddNewJobModal] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [appliedAt, setAppliedAt] = useState("");
  const [newJobStatus, setNewJobStatus] = useState("");
  const [newJobType, setNewJobType] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const { t } = useTranslation();

  const { id } = JSON.parse(localStorage.getItem("user"));

  const { sortingType, jobType, jobStatus } = useSearch();

  const { fetchJobs, jobs } = useJob();

  const payload = {
    job_title: newJobTitle,
    company: newCompany,
    applied_at: appliedAt,
    job_status: newJobStatus,
    job_type: newJobType,
    website_url: websiteUrl,
    user_id: id,
  };

  const handleAddJob = async () => {
    if (
      !newJobTitle ||
      !newCompany ||
      !appliedAt ||
      !newJobStatus ||
      !newJobType ||
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
      const response = await axios.post(`${API_URL}/api/jobs`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

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
        {t("Add a new job")}
      </div>
      <div className="flex items-center justify-center ml-2">
        {sortingType && sortingType === "asc" ? (
          <div className="bg-blue-100 border border-blue-500 px-6 py-1 rounded-md">
            {t("Selected")}: <span className="font-bold">{t("Ascending")}</span>
          </div>
        ) : sortingType && sortingType === "desc" ? (
          <div className="bg-blue-100 border border-blue-500 px-6 py-1 rounded-md">
            {t("Selected")}:{" "}
            <span className="font-bold">{t("Descending")}</span>
          </div>
        ) : sortingType && sortingType === "dateAsc" ? (
          <div className="bg-blue-100 border border-blue-500 px-6 py-1 rounded-md">
            {t("Selected")}: <span className="font-bold">{t("Earliest")}</span>
          </div>
        ) : sortingType && sortingType === "dateDesc" ? (
          <div className="bg-blue-100 border border-blue-500 px-6 py-1 rounded-md">
            {t("Selected")}: <span className="font-bold">{t("Latest")}</span>
          </div>
        ) : null}
      </div>
      <div className="flex items-center justify-center ml-2">
        {jobType && jobType !== "all" ? (
          <div className="bg-blue-100 border border-blue-500 px-6 py-1 rounded-md">
            {t("Selected JT")}: <span className="font-bold">{jobType}</span>
          </div>
        ) : null}
      </div>
      <div className="flex items-center justify-center ml-2">
        {jobStatus && jobStatus !== "all" ? (
          <div className="bg-blue-100 border border-blue-500 px-6 py-1 rounded-md">
            {t("Selected JS")}: <span className="font-bold">{jobStatus}</span>
          </div>
        ) : null}
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
                <Dropdown
                  defaultValue={"Job Status"}
                  options={jobstatuses}
                  onSelect={(e) => setNewJobStatus(e)}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Job Type</label>
                <Dropdown
                  defaultValue={"Job Type"}
                  options={jobtypes}
                  onSelect={(e) => setNewJobType(e)}
                />
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

      {jobs && jobs.length === 0 ? (
        <div className="absolute flex items-center justify-center gap-3 bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" bg-blue-100 px-4 rounded-md border border-blue-500 text-blue-600">
            <div className="text-xl">No jobs found</div>
          </div>
          <div
            className="bg-blue-100 p-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setAddNewJobModal(true)}
          >
            <Plus />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TableActions;

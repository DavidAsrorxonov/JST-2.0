import axios from "axios";
import { Plus, PlusCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useJob } from "../../context/jobContext";
import { useSearch } from "../../context/searchContext";
import { useTranslation } from "react-i18next";
import { API_URL } from "../../constants/api";
import Dropdown from "../todo/Dropdown";
import { jobstatuses, jobtypes } from "../../constants/jobConstants";
import ShowSelectedCategory from "../ui/showSelectedCategory";
import Toast from "../ui/Toast";
import { useUser } from "../../context/userContext";
import { authChecker } from "../../lib/utils/authChecker";
import gsap from "gsap";

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
  const { logout } = useUser();

  const confirmAddJobModal = useRef(null);

  useEffect(() => {
    if (confirmAddJobModal.current) {
      gsap.fromTo(
        confirmAddJobModal.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.4 }
      );
    }
  }, [addNewJobModal]);

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
    if (!authChecker(logout)) return;

    const token = localStorage.getItem("token");

    if (
      !newJobTitle ||
      !newCompany ||
      !appliedAt ||
      !newJobStatus ||
      !newJobType ||
      !websiteUrl
    ) {
      Toast({
        desciption: "All fields are required",
        color: "danger",
      });
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/jobs`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        Toast({
          desciption: "Job added successfully",
          color: "success",
        });
      }
      await fetchJobs();
      setAddNewJobModal(false);
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <div className="w-full flex justify-start pl-10">
      {/* Add New Job Button */}
      <div
        className="flex items-center gap-2 px-5 py-2 rounded-xl 
                   bg-[#171717] border border-white/30 
                   text-white hover:bg-[#222] cursor-pointer transition-all"
        onClick={() => setAddNewJobModal(true)}
      >
        <PlusCircle size={20} className="text-blue-400" />
        <span className="text-sm">{t("Add a new job")}</span>
      </div>

      {/* Selected Filters */}
      <div className="ml-2">
        <ShowSelectedCategory selected={sortingType} />
      </div>
      <div className="ml-2">
        <ShowSelectedCategory selected={jobType} />
      </div>
      <div className="ml-2">
        <ShowSelectedCategory selected={jobStatus} />
      </div>

      {/* Add New Job Modal */}
      {addNewJobModal && (
        <div>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setAddNewJobModal(false)}
          ></div>

          <div
            ref={confirmAddJobModal}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          bg-[#0a0a0a] text-white border border-white/30 rounded-2xl 
                          shadow-xl p-6 w-[90%] max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add New Job</h2>
              <button onClick={() => setAddNewJobModal(false)}>
                <X className="text-gray-400 hover:text-white transition" />
              </button>
            </div>

            <div id="form" className="space-y-4 text-sm">
              {/* Job Title */}
              <div>
                <label className="block mb-1 font-medium">Job Title</label>
                <input
                  value={newJobTitle}
                  onChange={(e) => setNewJobTitle(e.target.value)}
                  type="text"
                  className="w-full p-2 rounded-lg bg-[#171717] border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors duration-300"
                  placeholder="Enter job title"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block mb-1 font-medium">Company</label>
                <input
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  type="text"
                  className="w-full p-2 rounded-lg bg-[#171717] border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors duration-300"
                  placeholder="Enter company name"
                />
              </div>

              {/* Applied At */}
              <div>
                <label className="block mb-1 font-medium">Applied At</label>
                <input
                  value={appliedAt}
                  onChange={(e) => setAppliedAt(e.target.value)}
                  type="date"
                  className="w-full p-2 rounded-lg bg-[#171717] border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors duration-300"
                />
              </div>

              {/* Job Status */}
              <div>
                <label className="block mb-1 font-medium">Job Status</label>
                <Dropdown
                  defaultValue={"Job Status"}
                  options={jobstatuses}
                  onSelect={(e) => setNewJobStatus(e)}
                />
              </div>

              {/* Job Type */}
              <div>
                <label className="block mb-1 font-medium">Job Type</label>
                <Dropdown
                  defaultValue={"Job Type"}
                  options={jobtypes}
                  onSelect={(e) => setNewJobType(e)}
                />
              </div>

              {/* Website URL */}
              <div>
                <label className="block mb-1 font-medium">Website URL</label>
                <input
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  type="url"
                  className="w-full p-2 rounded-lg bg-[#171717] border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors duration-300"
                  placeholder="Enter website URL"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                  onClick={handleAddJob}
                >
                  Add Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Jobs Found State */}
      {jobs && jobs.length === 0 ? (
        <div className="absolute flex items-center justify-center gap-3 bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-[#171717] border border-white/30 px-4 py-2 rounded-full text-gray-300">
            <div className="text-sm">No jobs found</div>
          </div>
          <div
            className="bg-[#171717] border border-white/30 p-2 rounded-full text-gray-300 cursor-pointer hover:bg-[#222] transition"
            onClick={() => setAddNewJobModal(true)}
          >
            <Plus className="hover:rotate-180 transition-transform duration-300" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TableActions;

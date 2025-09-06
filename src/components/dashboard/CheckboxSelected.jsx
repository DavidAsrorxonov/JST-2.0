import { useState, useEffect, useRef } from "react";
import { useSelectedJobId } from "../../context/selectedJobIdContext";
import { useJob } from "../../context/jobContext";
import axios from "axios";
import gsap from "gsap";
import JobEditModal from "./JobEditModal";
import { API_URL } from "../../constants/api";
import Toast from "../ui/Toast";
import { useUser } from "../../context/userContext";
import { authChecker } from "../../lib/utils/authChecker";

const CheckboxSelected = () => {
  const { selectedJobId, setSelectedJobId } = useSelectedJobId();
  const { fetchJobs, jobs } = useJob();
  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const confirmDeleteRef = useRef(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [jobToEdit, setJobToEdit] = useState(null);
  const { logout } = useUser();

  const deleteSelectedJob = async () => {
    if (!authChecker(logout)) return;
    const token = localStorage.getItem("token");
    if (selectedJobId.length === 0) return;

    setIsDeleting(true);

    try {
      await Promise.all(
        selectedJobId.map((id) =>
          axios.delete(`${API_URL}/api/jobs/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
        )
      );
      fetchJobs();
      setSelectedJobId([]);
      Toast({ desciption: "Job deleted successfully", color: "success" });
    } catch (error) {
      console.error("Error deleting job:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const deselectAll = () => {
    setSelectedJobId([]);
  };

  const handleEditClick = () => {
    const job = jobs.find((job) => job.id === selectedJobId[0]);
    setJobToEdit(job);
    setShowEditModal(true);
  };

  const handleSaveEdit = async (updatedJob) => {
    if (!authChecker(logout)) return;
    const token = localStorage.getItem("token");

    try {
      await axios.patch(`${API_URL}/api/jobs/${updatedJob.id}`, updatedJob, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await fetchJobs();

      Toast({ desciption: "Job updated successfully", color: "success" });
      setSelectedJobId([]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (confirmDeleteRef.current) {
      gsap.fromTo(
        confirmDeleteRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4 }
      );
    }
  }, [confirmDelete]);

  return (
    <>
      {selectedJobId.length > 0 && (
        <div className="flex justify-between items-center mx-10 mb-4">
          <div className="flex items-center gap-4 bg-[#171717] border border-white/30 px-6 py-2 rounded-xl shadow-md text-sm text-gray-200">
            <span className="font-medium text-blue-400">
              {selectedJobId.length} selected
            </span>

            <div className="w-px h-5 bg-white/30"></div>

            <button
              className="text-red-400 hover:text-red-500 transition"
              onClick={() => setConfirmDelete(true)}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <svg
                  className="animate-spin h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  />
                </svg>
              ) : (
                "Delete Selected"
              )}
            </button>

            <div className="w-px h-5 bg-white/30"></div>

            {selectedJobId.length === 1 ? (
              <button
                className="text-blue-400 hover:text-blue-500 transition"
                onClick={handleEditClick}
              >
                Edit
              </button>
            ) : (
              <span className="text-gray-500 italic">
                Can’t edit multiple jobs
              </span>
            )}

            <div className="w-px h-5 bg-white/30"></div>

            <button
              className="text-gray-300 hover:text-white transition"
              onClick={deselectAll}
            >
              Deselect All
            </button>
          </div>
        </div>
      )}

      {showEditModal && jobToEdit && (
        <JobEditModal
          job={jobToEdit}
          onSave={handleSaveEdit}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {confirmDelete && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm"
          ref={confirmDeleteRef}
        >
          <div className="bg-[#171717] border border-white/30 rounded-2xl p-6 shadow-lg w-[450px] text-center text-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-white">
              Are you sure?
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              {selectedJobId.length > 1
                ? `${selectedJobId.length} selected jobs will be deleted on confirm`
                : `${selectedJobId.length} selected job will be deleted on confirm`}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  deleteSelectedJob();
                  setConfirmDelete(false);
                }}
                className="bg-[#e5e5e5] text-[#171717] px-4 py-1 rounded-lg"
              >
                Confirm
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="bg-[#171717] border border-white/30 text-[#e5e5e5] px-4 py-1 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckboxSelected;

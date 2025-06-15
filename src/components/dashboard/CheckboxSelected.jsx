import React, { useState } from "react";
import { useSelectedJobId } from "../../context/selectedJobIdContext";
import { Trash2 } from "lucide-react";
import { useJob } from "../../context/jobContext";
import axios from "axios";
import { addToast } from "@heroui/toast";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import JobEditModal from "./JobEditModal";

const CheckboxSelected = () => {
  const { selectedJobId, setSelectedJobId } = useSelectedJobId();
  const { fetchJobs, jobs } = useJob();
  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const confirmDeleteRef = useRef(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [jobToEdit, setJobToEdit] = useState(null);

  const deleteSelectedJob = async () => {
    if (selectedJobId.length === 0) return;

    setIsDeleting(true);

    try {
      await Promise.all(
        selectedJobId.map((id) =>
          axios.delete(`http://localhost:3000/api/jobs/${id}`)
        )
      );
      fetchJobs();
      setSelectedJobId([]);
      addToast({
        title: "Success",
        description: "Job deleted successfully",
        color: "success",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
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
    try {
      await axios.patch(
        `http://localhost:3000/api/jobs/${updatedJob.id}`,
        updatedJob
      );

      addToast({
        title: "Success",
        description: "Job updated successfully",
        color: "success",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
      setSelectedJobId([]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      confirmDeleteRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  });

  return (
    <>
      {selectedJobId.length > 0 && (
        <div className="flex justify-between items-center mx-10 mb-4">
          <div className="flex items-center gap-4 bg-gray-100 border border-gray-400 px-4 py-1 rounded-full shadow-sm text-sm text-gray-700">
            <span className="font-medium text-blue-600">
              {selectedJobId.length} selected
            </span>
            <div className="w-px h-4 bg-gray-400"></div>
            <button
              className="text-red-500 hover:text-red-700 transition"
              onClick={() => setConfirmDelete(true)}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <svg
                  className="animate-spin h-4 w-4 text-red-600"
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
            <div className="w-px h-4 bg-gray-400"></div>
            {selectedJobId.length === 1 ? (
              <button
                className="text-blue-500 hover:text-blue-700 transition"
                onClick={handleEditClick}
              >
                Edit
              </button>
            ) : (
              <span className="text-gray-400">Can't edit multiple jobs</span>
            )}
            <div className="w-px h-4 bg-gray-400"></div>
            <div className="ml-auto">
              <button
                className="text-blue-500 hover:text-blue-700 transition"
                onClick={deselectAll}
              >
                Deselect All
              </button>
            </div>
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
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          ref={confirmDeleteRef}
        >
          <div className="bg-white rounded-xl p-6 shadow-lg w-[300px] text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
            <p className="text-sm text-gray-600 mb-6">
              This action will permanently delete the selected job(s).
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  deleteSelectedJob();
                  setConfirmDelete(false);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Confirm
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
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

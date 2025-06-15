import React, { useState } from "react";
import { useSelectedJobId } from "../../context/selectedJobIdContext";
import { Trash2 } from "lucide-react";
import { useJob } from "../../context/jobContext";
import axios from "axios";
import { addToast } from "@heroui/toast";

const CheckboxSelected = () => {
  const { selectedJobId, setSelectedJobId } = useSelectedJobId();
  const { fetchJobs } = useJob();
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <>
      {selectedJobId.length > 0 && (
        <div className="flex justify-between items-center mx-10 mb-4">
          <div className="flex items-center gap-4 bg-gray-100 border border-gray-400 px-4 py-1 rounded-full shadow-sm text-sm text-gray-700">
            <span className="font-medium text-blue-600">
              {selectedJobId.length} selected
            </span>
            <button
              className="text-red-500 hover:text-red-700 transition"
              onClick={deleteSelectedJob}
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
            {selectedJobId.length === 1 ? (
              <button className="text-blue-500 hover:text-blue-700 transition">
                Edit
              </button>
            ) : (
              <span className="text-gray-400">Can't edit multiple jobs</span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CheckboxSelected;

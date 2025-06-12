import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import axios from "axios";
import { Briefcase, Calendar, Link as LinkIcon, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getTimeOfDay } from "../../lib/utils/getTimeOfDay";
import { useTranslation } from "react-i18next";

const statusColumns = ["Applied", "Interview", "Offer", "Rejected"];

const CompaniesHeader = () => {
  const [jobs, setJobs] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const { firstName, lastName, id: userId } = user || {};
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/jobs", {
          params: { user_id: userId },
        });
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    getJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12">
      <div className="flex justify-between items-center mb-12">
        <Logo />
        <div className="text-right">
          <h2 className="text-xl font-semibold text-gray-800">
            {getTimeOfDay()},
          </h2>
          <p className="text-lg font-medium text-blue-600">
            {firstName} {lastName}
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 border border-blue-500 rounded-full mb-10"
      >
        <ArrowLeft className="mr-2" size={18} />
        {t("Back to Dashboard")}
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {t("Job Application Board")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-gray-200 pt-6">
        {statusColumns.map((status) => (
          <div
            key={status}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 h-fit"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {status}
            </h2>
            <div className="space-y-4">
              {jobs.filter((job) => job.job_status === status).length === 0 ? (
                <p className="text-sm text-gray-400 italic">No jobs yet</p>
              ) : (
                jobs
                  .filter((job) => job.job_status === status)
                  .map((job, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
                    >
                      <h3 className="text-md font-semibold text-gray-800 mb-1">
                        {job.job_title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {job.company}
                      </p>

                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Briefcase size={14} className="mr-1 text-blue-500" />
                        {job.job_type}
                      </div>

                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar size={14} className="mr-1 text-blue-500" />
                        Applied: {new Date(job.applied_at).toLocaleDateString()}
                      </div>

                      {job.website_url && (
                        <a
                          href={job.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:underline text-sm mt-2"
                        >
                          <LinkIcon size={14} className="mr-1" />
                          Visit
                        </a>
                      )}
                    </div>
                  ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesHeader;

import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import axios from "axios";
import {
  Briefcase,
  Calendar,
  Link as LinkIcon,
  CheckCircle,
  XCircle,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CompaniesHeader = () => {
  const [jobs, setJobs] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const { firstName, lastName, id: userId } = user || {};

  const navigate = useNavigate();

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

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F4F8] py-10 px-6 md:px-16">
      <div className="flex justify-between items-center mb-8">
        <Logo />
        <div className="text-right">
          <h2 className="text-xl font-semibold text-[#2C3E50]">
            Welcome back,
          </h2>
          <p className="text-lg text-[#47569E]">
            {firstName} {lastName}
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center justify-center px-4 py-1 bg-blue-100 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-200 transition duration-300 mb-4"
      >
        <ArrowLeft className="mr-1" size={20} />
        Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">
        Your Job Applications
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length === 0 ? (
          <p className="text-[#47569E]">No applications yet.</p>
        ) : (
          jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all border border-[#E0E3F5]"
            >
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-1">
                {job.job_title}
              </h3>
              <p className="text-[#47569E] text-sm mb-2">{job.company}</p>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Briefcase size={16} className="mr-1 text-[#47569E]" />
                <span>{job.job_type}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar size={16} className="mr-1 text-[#47569E]" />
                <span>
                  Applied on {new Date(job.applied_at).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                {job.job_status === "Rejected" ? (
                  <XCircle size={16} className="mr-1 text-red-500" />
                ) : (
                  <CheckCircle size={16} className="mr-1 text-green-500" />
                )}
                <span>Status: {job.job_status}</span>
              </div>
              {job.website_url && (
                <a
                  href={job.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 text-sm mt-2 hover:underline"
                >
                  <LinkIcon size={16} className="mr-1" />
                  Visit Website
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CompaniesHeader;

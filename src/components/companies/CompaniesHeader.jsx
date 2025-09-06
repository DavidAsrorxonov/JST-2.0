import { useEffect, useState } from "react";
import Logo from "../Logo";
import axios from "axios";
import { Briefcase, Calendar, Link as LinkIcon, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getTimeOfDay } from "../../lib/utils/getTimeOfDay";
import { useTranslation } from "react-i18next";
import { API_URL } from "../../constants/api";
import { useUser } from "../../context/userContext";
import { authChecker } from "../../lib/utils/authChecker";

const statusColumns = ["Applied", "Interview", "Offer", "Rejected"];

const CompaniesHeader = () => {
  const [jobs, setJobs] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const { firstName, lastName, id: userId } = user || {};
  const navigate = useNavigate();

  const { logout } = useUser();

  const { t } = useTranslation();

  useEffect(() => {
    const getJobs = async () => {
      if (!authChecker(logout)) {
        return;
      }

      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(`${API_URL}/api/jobs`, {
          params: { user_id: userId },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    getJobs();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 px-6 md:px-12">
      <div className="flex justify-between items-center mb-12">
        <Logo />
        <div className="text-right">
          <h2 className="text-xl font-semibold text-[#e5e5e5]">
            {getTimeOfDay()},
          </h2>
          <p className="text-lg font-medium text-[#e5e5e5]/80">
            {firstName} {lastName}
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="inline-flex items-center px-4 py-1 text-sm font-medium text-[#e5e5e5] bg-[#171717] border border-white/30 rounded-lg mb-10"
      >
        <ArrowLeft className="mr-2" size={18} />
        {t("Back to Dashboard")}
      </button>

      <h1 className="text-3xl font-bold text-[#e5e5e5] mb-6">
        {t("Job Application Board")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/30 pt-6">
        {statusColumns.map((status) => (
          <div
            key={status}
            className="bg-[#171717] rounded-lg shadow-sm border border-white/30 p-2 h-fit"
          >
            <h2 className="text-xl font-semibold text-[#e5e5e5] mb-4">
              {status}
            </h2>
            <div className="space-y-4">
              {jobs.filter((job) => job.job_status === status).length === 0 ? (
                <p className="text-sm text-[#e5e5e5]/80 italic">No jobs yet</p>
              ) : (
                jobs
                  .filter((job) => job.job_status === status)
                  .map((job, index) => (
                    <div
                      key={index}
                      className="bg-[#212121] p-4 rounded-lg border border-white/30 shadow-sm hover:shadow-md transition"
                    >
                      <h3 className="text-md font-semibold text-[#e5e5e5] mb-1">
                        {job.job_title}
                      </h3>
                      <p className="text-sm text-[#e5e5e5]/80 mb-1">
                        {job.company}
                      </p>

                      <div className="flex items-center text-sm text-[#e5e5e5] mb-1">
                        <Briefcase size={14} className="mr-1 text-blue-500" />
                        {job.job_type}
                      </div>

                      <div className="flex items-center text-sm text-[#e5e5e5] mb-1">
                        <Calendar size={14} className="mr-1 text-blue-500" />
                        Applied: {new Date(job.applied_at).toLocaleDateString()}
                      </div>

                      {job.website_url && (
                        <a
                          href={job.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#e5e5e5] hover:underline text-sm mt-2"
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

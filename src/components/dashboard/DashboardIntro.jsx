import { useEffect } from "react";
import { useJob } from "../../context/jobContext";
import { useTranslation } from "react-i18next";

const DashboardIntro = () => {
  const { fetchJobs } = useJob();
  const { t } = useTranslation();

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="m-10">
      <div className="text-5xl font-extrabold text-[#e5e5e5]">
        {t("Dashboard")}
      </div>
      <span className="text-lg text-[#e5e5e5]">
        {t("Manage your job applications and track your progress")}
      </span>
    </div>
  );
};

export default DashboardIntro;

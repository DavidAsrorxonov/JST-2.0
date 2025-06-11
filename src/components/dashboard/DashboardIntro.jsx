import React, { useEffect } from "react";
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
      <div className="text-5xl font-extrabold">{t("Dashboard")}</div>
      <span className="text-lg text-[#47569E]">
        {t("Manage your job applications and track your progress")}
      </span>
    </div>
  );
};

export default DashboardIntro;

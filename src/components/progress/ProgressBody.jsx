import { useEffect } from "react";
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useJob } from "../../context/jobContext";
import { getDailyJobData } from "../../lib/utils/getDailyJobData";
import { getCategoryCounts } from "../../lib/utils/getCategoryCounts";
import NavigationButtons from ".././ui/NavigationButtons";
import { useTranslation } from "react-i18next";

const ChartCard = ({ title, children }) => (
  <div className="bg-[#212121] p-6 rounded-lg shadow-md border border-white/30">
    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
      {title}
    </h2>
    {children}
  </div>
);

const ProgressBody = () => {
  const { jobs, fetchJobs } = useJob();

  const { t } = useTranslation();

  useEffect(() => {
    fetchJobs();
  }, []);

  const dailyJobs = getDailyJobData(jobs);
  const statusData = getCategoryCounts(jobs, "job_status");
  const typeData = getCategoryCounts(jobs, "job_type");

  return (
    <div className="space-y-8 w-full">
      <NavigationButtons />
      <ChartCard title={t("Applications per Day")}>
        <ResponsiveContainer
          width="100%"
          height={300}
          className={"bg-[#212121]"}
        >
          <LineChart data={dailyJobs}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
            <XAxis dataKey="date" stroke="#e5e5e5" />
            <YAxis
              allowDecimals={false}
              stroke="#e5e5e5"
              label={{
                value: `${t("Applications")}`,
                angle: -90,
                position: "insideLeft",
                offset: 10,
                fill: "#e5e5e5",
              }}
            />
            <Tooltip />
            <Line
              type={"natural"}
              dataKey="applications"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title={t("Applications by Status")}>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis
                dataKey="name"
                stroke="#e5e5e5"
                label={{
                  value: `${t("Status")}`,
                  position: "insideBottom",
                  offset: -5,
                  fill: "#e5e5e5",
                }}
              />
              <YAxis
                allowDecimals={false}
                stroke="#e5e5e5"
                label={{
                  value: `${t("Count")}`,
                  angle: -90,
                  position: "insideLeft",
                  fill: "#e5e5e5",
                }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title={t("Applications by Type")}>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={typeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis
                dataKey="name"
                stroke="#e5e5e5"
                label={{
                  value: `${t("Type")}`,
                  position: "insideBottom",
                  offset: -5,
                  fill: "#e5e5e5",
                }}
              />
              <YAxis
                allowDecimals={false}
                stroke="#e5e5e5"
                label={{
                  value: `${t("Count")}`,
                  angle: -90,
                  position: "insideLeft",
                  fill: "#e5e5e5",
                }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default ProgressBody;

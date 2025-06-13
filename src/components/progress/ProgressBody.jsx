import React, { useEffect } from "react";
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
import NavigationButtons from "../NavigationButtons";

const ChartCard = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800">
    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
      {title}
    </h2>
    {children}
  </div>
);

const ProgressBody = () => {
  const { jobs, fetchJobs } = useJob();

  useEffect(() => {
    fetchJobs();
  }, []);

  const dailyJobs = getDailyJobData(jobs);
  const statusData = getCategoryCounts(jobs, "job_status");
  const typeData = getCategoryCounts(jobs, "job_type");

  return (
    <div className="space-y-8">
      <NavigationButtons />
      <ChartCard title="Applications per Day">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyJobs}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#2563eb" />
            <YAxis
              allowDecimals={false}
              stroke="#2563eb"
              label={{
                value: "Applications",
                angle: -90,
                position: "insideLeft",
                offset: 10,
                fill: "#6b7280",
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
        <ChartCard title="Applications by Status">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                label={{
                  value: "Status",
                  position: "insideBottom",
                  offset: -5,
                  fill: "#6b7280",
                }}
              />
              <YAxis
                allowDecimals={false}
                stroke="#6b7280"
                label={{
                  value: "Count",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#6b7280",
                }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Applications by Type">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={typeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                label={{
                  value: "Type",
                  position: "insideBottom",
                  offset: -5,
                  fill: "#6b7280",
                }}
              />
              <YAxis
                allowDecimals={false}
                stroke="#6b7280"
                label={{
                  value: "Count",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#6b7280",
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

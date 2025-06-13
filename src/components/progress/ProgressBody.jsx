import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO } from "date-fns";
import { useJob } from "../../context/jobContext";
import { getDailyJobData } from "../../lib/utils/getDailyJobData";

const ProgressBody = () => {
  const { jobs, fetchJobs } = useJob();

  useEffect(() => {
    fetchJobs();
  }, []);

  const dailyJobs = getDailyJobData(jobs);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6 w-[50%]">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Applications per Day
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dailyJobs}>
          <XAxis dataKey="date" />
          <YAxis
            allowDecimals={false}
            label={{
              value: "Applications",
              angle: -90,
              position: "insideLeft",
              offset: 10,
            }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="applications"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressBody;

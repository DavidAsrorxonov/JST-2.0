import { format, parseISO } from "date-fns";

export const getDailyJobData = (jobs) => {
  const grouped = {};

  jobs.forEach((job) => {
    const date = parseISO(job.applied_at);
    const key = format(date, "yyyy-MM-dd");
    grouped[key] = (grouped[key] || 0) + 1;
  });

  return Object.entries(grouped).map(([date, count]) => ({
    date,
    applications: count,
  }));
};

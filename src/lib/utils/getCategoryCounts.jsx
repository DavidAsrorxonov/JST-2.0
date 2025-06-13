export const getCategoryCounts = (jobs, key) => {
  const counts = {};

  jobs.forEach((job) => {
    const value = job[key];
    if (value) {
      counts[value] = (counts[value] || 0) + 1;
    }
  });

  return Object.entries(counts).map(([name, count]) => ({
    name,
    count,
  }));
};

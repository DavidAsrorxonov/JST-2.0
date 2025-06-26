export const dateSorting = (sortedJobs) => {
  return sortedJobs
    .slice()
    .sort((a, b) => new Date(a.applied_at) - new Date(b.applied_at))
    .map(({ applied_at }) => {
      const date = new Date(applied_at.split("T")[0]);
      return date
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
        .replace(",", "");
    });
};

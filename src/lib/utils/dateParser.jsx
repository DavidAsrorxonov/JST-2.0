export const dateParser = (applied_date) => {
  const toDate = new Date(applied_date.split("T")[0]);

  const converted = toDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return converted;
};

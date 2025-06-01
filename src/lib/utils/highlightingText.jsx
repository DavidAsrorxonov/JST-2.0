export const highlightMatch = (text, searchTerm) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "ig");
  const parts = text.split(regex);

  return parts.map((part, idx) =>
    regex.test(part) ? (
      <span key={idx} className="bg-yellow-200 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

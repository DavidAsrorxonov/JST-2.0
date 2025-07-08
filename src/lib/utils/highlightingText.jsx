export const highlightMatch = (text, searchTerm) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "ig");
  const parts = text.split(regex);

  return parts.map((part, idx) =>
    regex.test(part) ? (
      <span key={idx} className="bg-[#FDCB37] py-0.5 px-0 rounded-md">
        {part}
      </span>
    ) : (
      part
    )
  );
};

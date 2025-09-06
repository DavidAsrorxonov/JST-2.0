import { useEffect, useState } from "react";
import gsap from "gsap";

const ShowSelectedCategory = ({ selected }) => {
  const [display, setDisplay] = useState(selected);

  useEffect(() => {
    setDisplay(selected);
    gsap.fromTo(
      ".selected-category",
      { opacity: 0, scale: 0.9, y: -5 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [selected]);

  const styles =
    "selected-category bg-[#171717]/90 backdrop-blur-md border border-white/20 px-5 py-1.5 rounded-lg shadow-md text-sm flex items-center gap-1 text-gray-200";

  const renderText = () => {
    switch (display) {
      case "asc":
        return "Ascending";
      case "desc":
        return "Descending";
      case "dateAsc":
        return "Earliest";
      case "dateDesc":
        return "Latest";
      default:
        return display !== "all" ? display : null;
    }
  };

  if (!display || display === "all") return null;

  return (
    <div className="flex items-center justify-center">
      <div className={styles}>
        <span className="text-gray-400">Selected:</span>
        <span className="font-semibold text-gray-100">{renderText()}</span>
      </div>
    </div>
  );
};

export default ShowSelectedCategory;

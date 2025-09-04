import { ChevronDown, CircleX, ListFilter } from "lucide-react";
import { useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useTranslation } from "react-i18next";
import SortingAndFilteringModal from "../ui/SortingAndFilteringModal";

const Filtering = () => {
  const [filteringChosen, setFilteringChosen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [activeModal, setActiveModal] = useState("");
  const buttonRef = useRef(null);

  const { t } = useTranslation();
  const { jobStatus, setJobStatus, jobType, setJobType } = useSearch();

  const statuses = ["all", "Applied", "Interview", "Offer", "Rejected"];
  const types = ["all", "Full-time", "Part-time", "Internship", "Contract"];

  const handleFilterChange = (label, selectedValue) => {
    if (label === "Job Status") {
      setJobStatus(selectedValue);
    } else if (label === "Job Type") {
      setJobType(selectedValue);
    }
  };

  const openModalPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setFilteringChosen(true);
  };

  return (
    <div className="flex items-center">
      <div
        ref={buttonRef}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl border transition-all cursor-pointer
          ${
            filteringChosen
              ? "bg-[#2a2a2a] border-white/30 text-[#e5e5e5]"
              : "bg-[#171717] border-white/30 text-[#e5e5e5] hover:bg-[#2a2a2a]"
          }`}
        onClick={() => {
          setFilteringChosen(!filteringChosen);
          if (!filteringChosen) openModalPosition();
        }}
      >
        <ListFilter
          className={`${filteringChosen ? "text-white" : "text-[#e5e5e5]"}`}
          size={20}
        />
        <span className="text-sm font-medium">{t("Filter")}</span>
      </div>

      {filteringChosen && (
        <SortingAndFilteringModal
          onClick={handleFilterChange}
          label={["Job Status", "Job Type"]}
          values={[statuses, types]}
          filteringType="Filter by"
          position={openModalPosition}
          onClear={() => {
            setJobStatus("all");
            setJobType("all");
          }}
          selectedValues={[jobStatus, jobType]}
          onClose={() => setFilteringChosen(false)}
        />
      )}
    </div>
  );
};

export default Filtering;

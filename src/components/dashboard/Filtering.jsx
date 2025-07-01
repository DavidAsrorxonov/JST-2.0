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
        className="flex items-center justify-center gap-2 hover:bg-gray-100 border border-gray-300 px-4 py-1 rounded-full transition-all cursor-pointer"
        onClick={() => {
          setFilteringChosen(!filteringChosen);
          if (!filteringChosen) openModalPosition();
        }}
      >
        <ListFilter
          className={`${filteringChosen ? "text-blue-600" : ""}`}
          size={20}
        />{" "}
        {t("Filter")}
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
        />
      )}
    </div>
  );
};

export default Filtering;

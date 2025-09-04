import React, { useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { Clock } from "lucide-react";
import SortingAndFilteringModal from "../ui/SortingAndFilteringModal";

const SortingByDate = () => {
  const [sortingChosen, setSortingChosen] = useState(false);
  const buttonRef = useRef(null);
  const { setSortingType, sortingType } = useSearch();

  const sortingOptions = [
    { value: "dateAsc", label: "Earliest" },
    { value: "dateDesc", label: "Latest" },
  ];

  const handleSortingChange = (_, selectedValue) => {
    const selectedOption = sortingOptions.find(
      (option) => option.label === selectedValue
    );
    setSortingType(selectedOption?.value);
  };

  const getLabelFromValue = (value) => {
    const option = sortingOptions.find((opt) => opt.value === value);
    return option ? option.label : "Select";
  };

  return (
    <div className="flex items-center" ref={buttonRef}>
      <div
        className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                   bg-[#171717] border border-white/30 
                   text-white hover:bg-[#222] transition-all cursor-pointer"
        onClick={() => setSortingChosen(!sortingChosen)}
      >
        <Clock
          className={`${sortingChosen ? "text-blue-400" : "text-gray-300"}`}
          size={20}
        />
        <span className="text-sm">By Date</span>
      </div>

      {sortingChosen && (
        <SortingAndFilteringModal
          onClick={handleSortingChange}
          label={["Date"]}
          values={[sortingOptions.map((option) => option.label)]}
          filteringType="Sort By Date"
          position={buttonRef}
          onClear={() => setSortingType(null)}
          selectedValues={[getLabelFromValue(sortingType)]}
          onClose={() => setSortingChosen(false)}
        />
      )}
    </div>
  );
};

export default SortingByDate;

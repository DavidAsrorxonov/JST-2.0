import React, { useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { Clock, ClockArrowDown, ClockArrowUp } from "lucide-react";
import SortingAndFilteringModal from "../ui/SortingAndFilteringModal";

const SortingByDate = () => {
  const [sortingChosen, setSortingChosen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [activeModal, setActiveModal] = useState("");
  const buttonRef = useRef(null);
  const { setSortingType, sortingType } = useSearch();

  const openModalPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.buttom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setSortingChosen(true);
  };

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
        className="flex items-center justify-center gap-2 hover:bg-gray-100 border border-gray-300 px-4 py-1 rounded-full transition-all cursor-pointer"
        onClick={() => {
          setSortingChosen(!sortingChosen);
          if (!sortingChosen) openModalPosition();
        }}
      >
        <Clock
          className={`${sortingChosen ? "text-blue-600" : ""}`}
          size={20}
        />
        By Date
      </div>

      {sortingChosen && (
        <SortingAndFilteringModal
          onClick={handleSortingChange}
          label={["Date"]}
          values={[sortingOptions.map((option) => option.label)]}
          filteringType="Sort By Date"
          position={openModalPosition}
          onClear={() => setSortingType(null)}
          selectedValues={[getLabelFromValue(sortingType)]}
          onClose={() => setSortingChosen(false)}
        />
      )}
    </div>
  );
};

export default SortingByDate;

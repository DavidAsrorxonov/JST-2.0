import React, { useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { Clock, ClockArrowDown, ClockArrowUp } from "lucide-react";
import SortingAndFilteringModal from "../ui/SortingAndFilteringModal";

const SortingByDate = () => {
  const [sortingChosen, setSortingChosen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [activeModal, setActiveModal] = useState("");
  const buttonRef = useRef(null);
  const { setSortingType } = useSearch();

  const openModalPosition = (type) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.buttom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setActiveModal(type);
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

  return (
    <div className="flex items-center" ref={buttonRef}>
      <div
        className="flex items-center justify-center gap-2 hover:bg-gray-100 border border-gray-300 px-4 py-1 rounded-full transition-all cursor-pointer"
        onClick={() => setSortingChosen(!sortingChosen)}
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
        />
      )}
    </div>
  );
};

export default SortingByDate;

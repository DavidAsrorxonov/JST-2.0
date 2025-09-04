import { ArrowDownUp } from "lucide-react";
import { useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useTranslation } from "react-i18next";
import SortingAndFilteringModal from "../ui/SortingAndFilteringModal";

const Sorting = () => {
  const [sortingChosen, setSortingChosen] = useState(false);
  const buttonRef = useRef(null);
  const { setSortingType, sortingType } = useSearch();

  const sortingOptions = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  const { t } = useTranslation();

  const handleSortChange = (_, selectedValue) => {
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
        <ArrowDownUp
          className={`${sortingChosen ? "text-blue-400" : "text-gray-300"}`}
          size={20}
        />
        <span className="text-sm">{t("Sort")}</span>
      </div>

      {sortingChosen && (
        <SortingAndFilteringModal
          onClick={handleSortChange}
          label={["Order"]}
          values={[sortingOptions.map((option) => option.label)]}
          filteringType="Sorting"
          position={buttonRef}
          onClear={() => setSortingType(null)}
          selectedValues={[getLabelFromValue(sortingType)]}
          onClose={() => setSortingChosen(false)}
        />
      )}
    </div>
  );
};

export default Sorting;

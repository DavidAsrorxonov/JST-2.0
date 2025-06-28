import { ArrowDownAZ, ArrowDownUp, ArrowUpAZ, CircleX } from "lucide-react";
import { useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useTranslation } from "react-i18next";
import SortingAndFilteringModal from "../ui/SortingAndFilteringModal";

const Sorting = () => {
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

  const { t } = useTranslation();

  const handleSortChange = (_, selectedValue) => {
    setSortingType(selectedValue);
  };

  return (
    <div className="flex items-center" ref={buttonRef}>
      <div
        className="flex items-center justify-center gap-2 hover:bg-gray-100 border border-gray-300 px-4 py-1 rounded-full transition-all cursor-pointer"
        onClick={() => setSortingChosen(!sortingChosen)}
      >
        <ArrowDownUp
          className={`${sortingChosen ? "text-blue-600" : ""}`}
          size={20}
        />
        {t("Sort")}
      </div>

      {sortingChosen && (
        <SortingAndFilteringModal
          onClick={handleSortChange}
          label={["Order"]}
          values={[["asc", "desc"]]}
          filteringType="Sorting"
          position={openModalPosition}
          onClear={() => setSortingType(null)}
        />
      )}
    </div>
  );
};

export default Sorting;

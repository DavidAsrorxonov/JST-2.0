import { ArrowDownAZ, ArrowDownUp, ArrowUpAZ, CircleX } from "lucide-react";
import { useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useTranslation } from "react-i18next";

const Sorting = () => {
  const [sortingChosen, setSortingChosen] = useState(false);
  const { setSortingType } = useSearch();

  const { t } = useTranslation();

  return (
    <div className="flex items-center mt-5">
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
        <div className="flex gap-2">
          <div>{t("Sort by")}:</div>
          <div
            className="flex gap-2 items-center justify-center bg-blue-100 px-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setSortingType("asc")}
          >
            <span>
              <ArrowUpAZ size={20} />
            </span>
            <span>{t("Ascending")}</span>
          </div>
          <div
            className="flex gap-2 items-center justify-center bg-blue-100 px-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setSortingType("desc")}
          >
            <span>
              <ArrowDownAZ size={20} />
            </span>
            <span>{t("Descending")}</span>
          </div>
          <div
            className="flex gap-2 items-center justify-center bg-blue-100 px-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setSortingType("")}
          >
            <span>
              <CircleX size={20} />
            </span>
            {t("Clear sorting")}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sorting;

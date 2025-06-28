import React, { useState } from "react";
import { useSearch } from "../../context/searchContext";
import { Clock, ClockArrowDown, ClockArrowUp } from "lucide-react";

const SortingByDate = () => {
  const [sortingChosen, setSortingChosen] = useState(false);
  const { setSortingType } = useSearch();

  return (
    <div className="flex items-center">
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
        <div className="flex gap-2">
          <div>Sort by:</div>
          <div
            className="flex gap-2 items-center justify-center bg-blue-100 px-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setSortingType("dateAsc")}
          >
            <span>
              <ClockArrowDown size={20} />
            </span>
            <span>Earliest</span>
          </div>

          <div
            className="flex gap-2 items-center justify-center bg-blue-100 px-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setSortingType("dateDesc")}
          >
            <span>
              <ClockArrowUp size={20} />
            </span>
            <span>Latest</span>
          </div>

          <div
            className="flex gap-2 items-center justify-center bg-blue-100 px-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setSortingType("")}
          >
            <span>
              <Clock size={20} />
            </span>
            <span>None</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortingByDate;

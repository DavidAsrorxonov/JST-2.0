import { ArrowDownAZ, ArrowDownUp, ArrowUpAZ, CircleX } from "lucide-react";
import React, { useState } from "react";
import { useJob } from "../../context/jobContext";
import { useSearch } from "../../context/searchContext";

const Sorting = () => {
  const [sortingChosen, setSortingChosen] = useState(false);
  const { setSortingType } = useSearch();

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
        Sort
      </div>

      {sortingChosen && (
        <div className="flex gap-2">
          <div>Sort by:</div>
          <div
            className="flex gap-2 items-center justify-center bg-blue-100 px-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setSortingType("asc")}
          >
            <span>
              <ArrowUpAZ size={20} />
            </span>
            <span>Ascending</span>
          </div>
          <div
            className="flex gap-2 items-center justify-center bg-blue-100 px-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setSortingType("desc")}
          >
            <span>
              <ArrowDownAZ size={20} />
            </span>
            <span>Descending</span>
          </div>
          <div
            className="flex gap-2 items-center justify-center bg-blue-100 px-2 rounded-full border border-blue-500 text-blue-600 cursor-pointer"
            onClick={() => setSortingType("")}
          >
            <span>
              <CircleX size={20} />
            </span>
            Clear sorting
          </div>
        </div>
      )}
    </div>
  );
};

export default Sorting;

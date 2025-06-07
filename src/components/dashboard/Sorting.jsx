import { ArrowDownAZ, ArrowDownUp, ArrowUpAZ, CircleX } from "lucide-react";
import React, { useState } from "react";
import { useJob } from "../../context/jobContext";
import { useSearch } from "../../context/searchContext";

const Sorting = () => {
  const [sortingChosen, setSortingChosen] = useState(false);
  const { setSortingType } = useSearch();

  return (
    <div className="flex items-center mt-5">
      <div className="hover:bg-gray-100 p-2 rounded-full transition-all">
        <ArrowDownUp
          onClick={() => setSortingChosen(!sortingChosen)}
          className={`cursor-pointer ${sortingChosen ? "text-blue-600" : ""}`}
        />
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

import { ArrowDownUp } from "lucide-react";
import React, { useState } from "react";

const Sorting = () => {
  const [sortingChosen, setSortingChosen] = useState(false);

  return (
    <div className="flex items-center mt-5">
      <div className="hover:bg-gray-100 p-2 rounded-full transition-all">
        <ArrowDownUp
          onClick={() => setSortingChosen(!sortingChosen)}
          className="cursor-pointer"
        />
      </div>

      {sortingChosen && (
        <div className="flex gap-2">
          <div>Sort by:</div>
          <div>Latest</div>
          <div>Oldest</div>
        </div>
      )}
    </div>
  );
};

export default Sorting;

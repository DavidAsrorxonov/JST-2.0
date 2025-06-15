import React, { useState } from "react";
import { useSelectedJobId } from "../../context/selectedJobIdContext";
import { Trash2 } from "lucide-react";

const CheckboxSelected = () => {
  const { selectedJobId } = useSelectedJobId();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      {selectedJobId.length > 0 && (
        <div className="flex items-center justify-between mx-10 mb-4">
          <div className="flex items-center gap-2 bg-gray-100 border border-gray-500 px-4 py-1 rounded-full shadow-sm">
            <span className="font-medium text-blue-600">
              Selected: {selectedJobId.length}
            </span>
            <span className="text-gray-400">|</span>
            <button className="text-red-600 hover:underline hover:text-red-700 transition text-sm">
              Delete Selected
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckboxSelected;

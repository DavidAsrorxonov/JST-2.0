import React from "react";
import Dropdown from "../todo/Dropdown";

const SortingAndFilteringModal = ({
  onClick,
  label = [],
  values = [],
  filteringType,
  position,
  onClear = () => {},
  selectedValues = [],
}) => {
  if (!onClick) return null;

  return (
    <div className="relative">
      <div
        className="absolute z-50 bg-white p-4 rounded-md shadow-lg border mt-2 w-[400px]"
        style={{ top: position.top, left: position.left }}
      >
        <div className="font-bold text-lg mb-2">{filteringType}</div>
        <div className="flex flex-col gap-4">
          {label.map((item, i) => (
            <div key={i}>
              <div className="mb-1 text-sm text-gray-700">{item}</div>
              <Dropdown
                options={values[i] || []}
                onSelect={(val) => onClick(item, val)}
                defaultValue="Select"
                currentValue={selectedValues[i]}
              />
            </div>
          ))}
        </div>
        <div className="font-bold m-3 cursor-pointer" onClick={onClear}>
          <span className="hover:bg-gray-100 transition-all duration-300 px-4 py-1 rounded-md">
            Clear selection
          </span>
        </div>
      </div>
    </div>
  );
};

export default SortingAndFilteringModal;

import Dropdown from "../todo/Dropdown";
import { CircleX, X } from "lucide-react";

const SortingAndFilteringModal = ({
  onClick,
  label = [],
  values = [],
  filteringType,
  position,
  onClear = () => {},
  selectedValues = [],
  onClose = () => {},
}) => {
  if (!onClick) return null;

  return (
    <div className="relative">
      <div
        className="absolute z-50 bg-[#171717] border border-white/30 p-4 rounded-xl shadow-lg w-[400px]"
        style={{ top: position.top, left: position.left }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="font-semibold text-lg text-[#e5e5e5]">
            {filteringType}
          </div>
          <span
            className="cursor-pointer text-[#e5e5e5] hover:text-red-500 transition"
            onClick={onClose}
          >
            <X size={20} />
          </span>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col gap-4">
          {label.map((item, i) => (
            <div key={i}>
              <div className="mb-1 text-sm text-gray-400">{item}</div>
              <Dropdown
                options={values[i] || []}
                onSelect={(val) => onClick(item, val)}
                defaultValue="Select"
                currentValue={selectedValues[i]}
              />
            </div>
          ))}
        </div>

        {/* Clear Selection */}
        <div className="font-medium mt-4 cursor-pointer" onClick={onClear}>
          <div className="flex items-center">
            <span className="flex items-center gap-2 px-3 py-2 rounded-md text-[#e5e5e5] hover:bg-[#212121] hover:text-red-400 transition-all duration-200">
              <CircleX size={20} />
              Clear selection
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingAndFilteringModal;

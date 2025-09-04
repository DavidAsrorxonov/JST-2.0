import { ChevronsUpDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const Dropdown = ({ options, defaultValue, onSelect, currentValue }) => {
  const [optionModalOpen, setOptionModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    currentValue || defaultValue
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (currentValue !== undefined && currentValue !== selectedOption) {
      setSelectedOption(currentValue);
    }
  }, [currentValue, selectedOption]);

  useEffect(() => {
    if (optionModalOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [optionModalOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOptionModalOpen(false);
      }
    };

    if (optionModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionModalOpen]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOptionModalOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative w-full bg-[#212121] border border-white/30 rounded-lg px-4 py-2 cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="text-[#e5e5e5]">{selectedOption}</div>
        <ChevronsUpDown
          className="text-[#e5e5e5] cursor-pointer"
          onClick={() => setOptionModalOpen((prev) => !prev)}
        />
      </div>

      {optionModalOpen && (
        <div className="absolute left-0 mt-2 z-50 w-full" ref={dropdownRef}>
          <div className="bg-[#171717] rounded-xl shadow-lg border border-white/30 py-2">
            {options.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleOptionClick(item)}
                className="px-4 py-2 text-[#e5e5e5] hover:bg-[#212121] hover:text-white transition-colors duration-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

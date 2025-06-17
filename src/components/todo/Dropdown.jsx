import { ChevronsUpDown } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const Dropdown = ({ options, defaultValue }) => {
  const [optionModalOpen, setOptionModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (optionModalOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, x: 50, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: "power2.out" }
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
  };

  return (
    <div className="relative w-full bg-white border border-gray-400 rounded-lg p-3">
      <div className="flex justify-between">
        <div className="text-gray-800">{selectedOption}</div>
        <div>
          <ChevronsUpDown
            className="text-gray-800 cursor-pointer"
            onClick={() => setOptionModalOpen((prev) => !prev)}
          />
        </div>
      </div>

      {optionModalOpen && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          ref={dropdownRef}
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-6 py-4 w-64">
            <h1 className="text-2xl font-bold">{selectedOption}</h1>
            {options.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleOptionClick(item)}
                className="text-gray-700 hover:text-black py-2 cursor-pointer transition-colors duration-200"
              >
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

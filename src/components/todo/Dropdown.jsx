import { ChevronsUpDown } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const Dropdown = ({ options, defaultValue }) => {
  const [optionModalOpen, setOptionModalOpen] = useState(false);
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

  return (
    <div className="relative w-full bg-white border border-gray-400 rounded-lg p-3">
      <div className="flex justify-between">
        <div>{defaultValue}</div>
        <div>
          <ChevronsUpDown
            className="text-gray-800 cursor-pointer"
            onClick={() => setOptionModalOpen(!optionModalOpen)}
          />
        </div>
      </div>

      {optionModalOpen && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          ref={dropdownRef}
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-6 py-4 w-64">
            <h1 className="text-2xl font-bold">{defaultValue}</h1>
            {options.map((item, idx) => (
              <div key={idx}>
                <div className="text-gray-700 hover:text-black py-2 cursor-pointer transition-colors duration-200">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

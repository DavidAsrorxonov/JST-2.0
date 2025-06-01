import { ArrowDownUp, ChevronRight, Funnel, Search, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import useSearchCommand from "../../lib/commands/searchCommand";

const Input = () => {
  const { setSearchTerm } = useSearch();
  const [filteringModal, setFilteringModal] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const input = inputRef.current;

      // Ctrl+K or Cmd+K to focus input
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        if (input) input.focus();
      }

      // Escape to clear and unfocus input
      if (event.key === "Escape") {
        if (input) {
          input.value = "";
          input.blur();
          setSearchTerm("");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSearchTerm]);

  return (
    <div className="w-[50%] flex items-center justify-center">
      <div className="relative w-full">
        <Search
          size={25}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#47569E]"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 rounded-xl bg-[#E7E9F4] outline-none placeholder:text-[#47569E]"
        />
      </div>
      <div className="ml-3 px-2 w-10 h-10 rounded-xl flex items-center justify-center bg-[#E7E9F4] hover:bg-[#D0D2E9] transition-colors cursor-pointer relative">
        <Funnel
          size={25}
          onClick={() => setFilteringModal(true)}
          className={`${filteringModal ? "text-blue-500 transition-all" : ""}`}
        />

        {filteringModal && (
          <div className="absolute top-12 left-0 bg-[#E7E9F4] shadow-lg rounded-lg p-4 w-64 z-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Filter Options</h3>
              <X
                size={25}
                onClick={() => setFilteringModal(false)}
                className="hover:text-red-500 transition-all"
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm">Job Type:</label>
              <select className="border rounded px-2 py-1">
                <option value="all">All</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm">Status:</label>
              <select className="border rounded px-2 py-1">
                <option value="all">All</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <button
              onClick={() => setFilteringModal(false)}
              className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition"
            >
              Apply Filters
            </button>
          </div>
        )}
      </div>
      {/* <div className="ml-3 px-2 w-10 h-10 rounded-xl flex items-center justify-center bg-[#E7E9F4] hover:bg-[#D0D2E9] transition-colors cursor-pointer">
        <ArrowDownUp size={25} />
      </div> */}
    </div>
  );
};

export default Input;

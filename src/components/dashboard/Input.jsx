import { Funnel, Search, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useJob } from "../../context/jobContext";
import { Listbox } from "@headlessui/react";

const Input = () => {
  const { jobs } = useJob();
  const { setSearchTerm, jobStatus, setJobStatus, jobType, setJobType } =
    useSearch();
  const [filteringModal, setFilteringModal] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const input = inputRef.current;
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        if (input) input.focus();
      }
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

  const statuses = ["all", "Applied", "Interview", "Offer", "Rejected"];
  const types = ["all", "Full-time", "Part-time", "Internship", "Contract"];

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
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#47569E] hidden md:flex items-center space-x-1">
          <kbd className="bg-white/70 border border-[#B0B3D6] px-1.5 py-0.5 rounded text-xs font-mono shadow-sm">
            {navigator.platform.includes("Mac") ? "⌘" : "Ctrl"}
          </kbd>
          <kbd className="bg-white/70 border border-[#B0B3D6] px-1.5 py-0.5 rounded text-xs font-mono shadow-sm">
            K
          </kbd>
        </div>
      </div>

      <div className="ml-3 px-2 w-10 h-10 rounded-xl flex items-center justify-center bg-[#E7E9F4] hover:bg-[#D0D2E9] transition-colors cursor-pointer relative">
        <Funnel
          size={25}
          onClick={() => {
            setFilteringModal(true);
            console.log(jobs);
          }}
          className={`${filteringModal ? "text-blue-500 transition-all" : ""}`}
        />

        {filteringModal && (
          <div className="absolute top-12 left-0 bg-[#E7E9F4] shadow-lg rounded-lg p-4 w-64 z-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Filter Options</h3>
              <X
                size={25}
                onClick={() => setFilteringModal(false)}
                className="hover:text-red-500 transition-all cursor-pointer"
              />
            </div>

            <div className="mb-3">
              <label className="text-sm block mb-1">Job Type:</label>
              <Listbox value={jobType} onChange={setJobType}>
                <div className="relative">
                  <Listbox.Button className="w-full border rounded px-3 py-2 flex justify-between items-center bg-white shadow-sm text-sm">
                    {jobType}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 shadow-lg z-50">
                    {types.map((type, index) => (
                      <Listbox.Option
                        key={index}
                        value={type}
                        className={({ active }) =>
                          `cursor-pointer px-3 py-1 ${
                            active ? "bg-blue-100 text-blue-800" : "text-black"
                          }`
                        }
                      >
                        {type}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            {/* Job Status Dropdown */}
            <div className="mb-3">
              <label className="text-sm block mb-1">Status:</label>
              <Listbox value={jobStatus} onChange={setJobStatus}>
                <div className="relative">
                  <Listbox.Button className="w-full border rounded px-3 py-2 flex justify-between items-center bg-white shadow-sm text-sm">
                    {jobStatus}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 shadow-lg z-50">
                    {statuses.map((status, index) => (
                      <Listbox.Option
                        key={index}
                        value={status}
                        className={({ active }) =>
                          `cursor-pointer px-3 py-1 ${
                            active ? "bg-blue-100 text-blue-800" : "text-black"
                          }`
                        }
                      >
                        {status}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            {/* <button
              onClick={() => setFilteringModal(false)}
              className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition"
            >
              Apply Filters
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;

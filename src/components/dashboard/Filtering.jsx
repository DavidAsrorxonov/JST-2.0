import { Check, ChevronDown, CircleX, ListFilter } from "lucide-react";
import React, { useState } from "react";
import { useSearch } from "../../context/searchContext";

const Filtering = () => {
  const [filteringChosen, setFilteringChosen] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const { jobStatus, setJobStatus, jobType, setJobType } = useSearch();

  const statuses = ["all", "Applied", "Interview", "Offer", "Rejected"];
  const types = ["all", "Full-time", "Part-time", "Internship", "Contract"];

  return (
    <div className="flex items-center mt-5">
      <div
        className="flex items-center justify-center gap-2 hover:bg-gray-100 border border-gray-300 px-4 py-1 rounded-full transition-all cursor-pointer"
        onClick={() => {
          setFilteringChosen(!filteringChosen);
          setActiveModal("");
        }}
      >
        <ListFilter
          className={`${filteringChosen ? "text-blue-600" : ""}`}
          size={20}
        />{" "}
        Filter
      </div>

      {filteringChosen && (
        <div className="flex gap-2">
          <div>Filter by:</div>
          <FilteringModal
            title={"Job Status"}
            icon={<ChevronDown size={20} />}
            onClick={() =>
              setActiveModal((prev) => (prev === "status" ? "" : "status"))
            }
            selectedJobStatusOrType={jobStatus}
          />
          <FilteringModal
            title={"Job Type"}
            icon={<ChevronDown size={20} />}
            onClick={() =>
              setActiveModal((prev) => (prev === "type" ? "" : "type"))
            }
            selectedJobStatusOrType={jobType}
          />
          {jobStatus !== "all" || jobType !== "all" ? (
            <div
              className="flex items-center gap-2 bg-blue-100 px-2 rounded-full border border-blue-600 text-blue-700 cursor-pointer"
              onClick={() => {
                setJobStatus("all");
                setJobType("all");
              }}
            >
              <CircleX size={15} />
              Clear
            </div>
          ) : null}
        </div>
      )}

      {activeModal && (
        <FilteringItemsModal
          items={activeModal === "status" ? statuses : types}
          title={activeModal === "status" ? "Job Status" : "Job Type"}
          onSelect={(value) => {
            if (activeModal === "status") {
              setJobStatus(value);
            } else {
              setJobType(value);
            }
            setActiveModal("");
          }}
        />
      )}
    </div>
  );
};

export const FilteringModal = ({
  title,
  icon,
  onClick,
  selectedJobStatusOrType,
}) => {
  return (
    <div
      className="flex bg-blue-100 px-2 rounded-full border border-blue-600 text-blue-700 cursor-pointer"
      onClick={onClick}
    >
      <span className="mr-auto">
        {title}:{" "}
        <span
          className="font-semibold"
          onClick={() => console.log(typeof selectedJobStatusOrType)}
        >
          {selectedJobStatusOrType.charAt(0).toUpperCase() +
            selectedJobStatusOrType.slice(1)}
        </span>
      </span>
      <span className="ml-auto flex items-center justify-end">{icon}</span>
    </div>
  );
};

export const FilteringItemsModal = ({ items, title, onSelect }) => {
  return (
    <div className="relative">
      <div className="absolute right-0 top-4 w-60 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
        <div className="px-4 py-3 text-sm text-gray-500 font-semibold bg-gray-50 border-b border-gray-200">
          {title}
        </div>
        <ul className="divide-y divide-gray-100">
          {items.map((item, i) => (
            <li
              key={i}
              onClick={() => onSelect(item)}
              className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-black cursor-pointer transition-all"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filtering;

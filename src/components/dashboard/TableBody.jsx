import { useJob } from "../../context/jobContext";
import { SquareArrowOutUpRight } from "lucide-react";
import "../../styles/TableBody.css";
import { useSearch } from "../../context/searchContext";
import { useSelectedJobId } from "../../context/selectedJobIdContext";

const TableBody = () => {
  const { jobs, fetchJobs } = useJob();
  const { id } = JSON.parse(localStorage.getItem("user"));
  const { searchTerm, jobStatus, jobType, sortingType, advancedSearchTerm } =
    useSearch();
  const { selectedJobId, setSelectedJobId } = useSelectedJobId();

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.job_title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCompany = job.company
      .toLowerCase()
      .includes(advancedSearchTerm.toLowerCase());

    const matchesStatus = job.job_status === jobStatus || jobStatus === "all";
    const matchesType = job.job_type === jobType || jobType === "all";
    return matchesSearch && matchesCompany && matchesStatus && matchesType;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortingType === "asc") {
      return a.job_title.localeCompare(b.job_title);
    } else if (sortingType === "desc") {
      return b.job_title.localeCompare(a.job_title);
    } else {
      return 0;
    }
  });

  const changeTheBgOfSelectedRow = (idx) => {
    setSelectedJobId((prev) =>
      prev.includes(idx) ? prev.filter((id) => id !== idx) : [...prev, idx]
    );
  };

  return (
    <>
      {sortedJobs.length === 0 ? (
        <tr>
          <td
            colSpan="7"
            className="text-center py-8 text-sm text-blue-600 bg-white/30 rounded-xl border border-[#cdd3f0] shadow-sm"
          >
            No results found. Try adjusting your search or filters.
          </td>
        </tr>
      ) : (
        sortedJobs.map(
          ({
            id,
            job_title,
            company,
            applied_at,
            job_status,
            job_type,
            website_url,
          }) => (
            <tr
              key={id}
              className={`text-black border-b-1.5 border-gray-500 border-r-gray-500 last:border-r-0 ${
                selectedJobId.includes(id) ? "bg-blue-100" : ""
              }`}
            >
              <td className="border-r border-gray-500 last:border-r-0">
                <input
                  type="checkbox"
                  className="cursor-pointer w-4 h-4"
                  checked={selectedJobId.includes(id)}
                  onChange={() => changeTheBgOfSelectedRow(id)}
                />
              </td>
              <td className="border-r border-gray-500 last:border-r-0 relative group">
                <input
                  defaultValue={job_title}
                  className={`px-3 py-0.5 focus:outline-blue-300 w-[90%] cursor-text ${
                    selectedJobId.includes(id) ? "bg-blue-100" : ""
                  }`}
                />
              </td>
              <td className="border-r border-gray-500 last:border-r-0">
                <input
                  defaultValue={company}
                  className={`py-0.5 px-3 focus:outline-blue-300 cursor-text w-[90%] ${
                    selectedJobId.includes(id) ? "bg-blue-100" : ""
                  }`}
                />
              </td>
              <td className="p-3 border-r border-gray-500 last:border-r-0">
                <div className="px-3 py-0.5 bg-yellow-100 border border-yellow-500 rounded-md">
                  {applied_at.split("T")[0]}
                </div>
              </td>
              <td className="border-r border-gray-500 last:border-r-0">
                <select className="custom-select">
                  <option value="Applied" selected={job_status === "Applied"}>
                    Applied
                  </option>
                  <option
                    value="Interview"
                    selected={job_status === "Interview"}
                  >
                    Interview
                  </option>
                  <option value="Offer" selected={job_status === "Offer"}>
                    Offer
                  </option>
                  <option value="Rejected" selected={job_status === "Rejected"}>
                    Rejected
                  </option>
                </select>
              </td>
              <td className="border-r border-gray-500 last:border-r-0">
                <select className="custom-select">
                  <option value="Full-time" selected={job_type === "Full-time"}>
                    Full-time
                  </option>
                  <option value="Part-time" selected={job_type === "Part-time"}>
                    Part-time
                  </option>
                  <option
                    value="Internship"
                    selected={job_type === "Internship"}
                  >
                    Internship
                  </option>
                  <option value="Contract" selected={job_type === "Contract"}>
                    Contract
                  </option>
                </select>
              </td>
              <td className="p-3">
                <div className="flex items-center justify-between">
                  <input
                    defaultValue={website_url}
                    className={`py-0.5 px-3 focus:outline-blue-300 cursor-text w-[90%] ${
                      selectedJobId.includes(id) ? "bg-blue-100" : ""
                    }`}
                  />
                  <a
                    href={
                      website_url && website_url.startsWith("http")
                        ? website_url
                        : `https://${website_url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SquareArrowOutUpRight size={20} />
                  </a>
                </div>
              </td>
            </tr>
          )
        )
      )}
    </>
  );
};

export default TableBody;

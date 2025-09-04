import { useJob } from "../../context/jobContext";
import { SquareArrowOutUpRight } from "lucide-react";
import "../../styles/TableBody.css";
import { useSearch } from "../../context/searchContext";
import { useSelectedJobId } from "../../context/selectedJobIdContext";
import { highlightMatch } from "../../lib/utils/highlightingText";
import { dateParser } from "../../lib/utils/dateParser";

const TableBody = () => {
  const { jobs } = useJob();
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
    if (sortingType === "asc") return a.job_title.localeCompare(b.job_title);
    if (sortingType === "desc") return b.job_title.localeCompare(a.job_title);
    if (sortingType === "dateAsc")
      return new Date(a.applied_at) - new Date(b.applied_at);
    if (sortingType === "dateDesc")
      return new Date(b.applied_at) - new Date(a.applied_at);
    return 0;
  });

  const toggleRowSelection = (id) => {
    setSelectedJobId((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  return (
    <>
      {sortedJobs.length === 0 ? (
        <tr>
          <td
            colSpan="7"
            className="text-center py-8 text-sm text-blue-400 bg-white/5 rounded-xl border border-white/10"
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
              className={`border-b border-white/10 transition-colors ${
                selectedJobId.includes(id) ? "bg-[#262626]" : "hover:bg-white/5"
              }`}
            >
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  checked={selectedJobId.includes(id)}
                  onChange={() => toggleRowSelection(id)}
                />
              </td>

              <td className="px-4 py-3 text-left">
                {highlightMatch(job_title, searchTerm)}
              </td>

              <td className="px-4 py-3 text-left">
                {highlightMatch(company, advancedSearchTerm)}
              </td>

              <td className="px-4 py-3 text-left text-gray-400">
                {dateParser(applied_at)}
              </td>

              <td className="px-4 py-3 text-left capitalize">{job_status}</td>

              <td className="px-4 py-3 text-left capitalize">{job_type}</td>

              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <input
                    disabled
                    defaultValue={website_url}
                    className="w-full bg-transparent text-gray-300 text-sm border border-white/10 rounded px-2 py-1 cursor-text truncate"
                  />
                  <a
                    href={
                      website_url && website_url.startsWith("http")
                        ? website_url
                        : `https://${website_url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <SquareArrowOutUpRight size={18} />
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

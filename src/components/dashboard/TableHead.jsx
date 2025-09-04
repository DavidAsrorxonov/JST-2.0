import { useSelectedJobId } from "../../context/selectedJobIdContext";
import { useJob } from "../../context/jobContext";
import "../../styles/TableBody.css";

const TableHead = () => {
  const tableHead = [
    "#",
    "Job Title",
    "Company",
    "Application Date",
    "Status",
    "Job Type",
    "Website URL",
  ];
  const { jobs } = useJob();
  const { selectedJobId, setSelectedJobId } = useSelectedJobId();

  const allSelected = jobs.length > 0 && selectedJobId.length === jobs.length;

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedJobId([]);
    } else {
      setSelectedJobId(jobs.map((job) => job.id));
    }
  };

  return (
    <tr>
      {tableHead.map((item, index) => (
        <th
          key={index}
          className="p-3 border-b-2 border-r-1 border-b-gray-500 border-r-gray-500 last:border-r-0"
        >
          {item === "#" ? (
            <div>
              <input
                type="checkbox"
                className="custom-checkbox"
                onChange={handleSelectAll}
                checked={
                  selectedJobId.length === jobs.length && jobs.length > 0
                }
              />
            </div>
          ) : (
            item
          )}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;

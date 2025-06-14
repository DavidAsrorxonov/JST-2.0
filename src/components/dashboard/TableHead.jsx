import React from "react";

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

  return (
    <tr>
      {tableHead.map((item, index) => (
        <th
          key={index}
          className="p-3 border-b-2 border-r-1 border-b-gray-500 border-r-gray-500 last:border-r-0"
        >
          {item}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;

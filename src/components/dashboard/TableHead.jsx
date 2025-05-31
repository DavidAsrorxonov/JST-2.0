import React from "react";

const TableHead = () => {
  const tableHead = [
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
        <th key={index} className="p-3 border border-b-[#CED2E9]">
          {item}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;

import React from "react";

const PasswordDetails = () => {
  return (
    <div className="bg-blue-50 border border-blue-300 shadow-md rounded-lg p-4 text-sm text-blue-900">
      <ul className="list-disc list-inside space-y-1">
        <li className="text-blue-900">
          Must include at least one letter (A-Z or a-z)
        </li>
        <li className="text-blue-900">Must include at least one digit (0-9)</li>
        <li className="text-blue-900">
          Must include at least one symbol (e.g., !, @, #, $)
        </li>
        <li className="text-blue-900">Must be at least 8 characters long</li>
        <li className="text-blue-900">
          Cannot contain spaces or whitespace characters
        </li>
      </ul>
    </div>
  );
};

export default PasswordDetails;

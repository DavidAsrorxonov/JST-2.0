import React from "react";

const PasswordDetails = () => {
  return (
    <div>
      <ul>
        <li>Must include at least one letter (A-Z or a-z)</li>
        <li>Must include at least one digit (0-9)</li>
        <li>Must include at least one symbol (e.g., !, @, #, $)</li>
        <li>Must be at least 8 characters long</li>
        <li>Cannot contain spaces or whitespace characters</li>
      </ul>
    </div>
  );
};

export default PasswordDetails;

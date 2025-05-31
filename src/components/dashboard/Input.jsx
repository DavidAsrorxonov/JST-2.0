import { Search } from "lucide-react";
import React from "react";

const Input = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full">
        <Search
          size={25}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-10 rounded-xl bg-gray-100 outline-none"
        />
      </div>
    </div>
  );
};

export default Input;

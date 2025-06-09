import React from "react";
import Logo from "../Logo";

const NewsHeader = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <h1 className="text-lg font-semibold text-gray-800">News</h1>
            <p className="text-sm text-gray-500">
              Stay up-to-date with the latest news and updates.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewsHeader;

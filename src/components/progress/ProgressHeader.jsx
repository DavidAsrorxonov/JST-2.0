import React from "react";
import Logo from "../Logo";
import { ChartNoAxesCombined } from "lucide-react";

const ProgressHeader = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <h1 className="text-lg font-semibold text-gray-800">Progress</h1>
            <ChartNoAxesCombined size={20} />
          </div>
          <p className="text-sm text-gray-500">
            Keep track of your job search progress.
          </p>
        </div>
      </div>
    </header>
  );
};

export default ProgressHeader;

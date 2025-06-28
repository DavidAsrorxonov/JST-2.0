import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const ThemeToggleUI = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className="p-2 border-2 flex items-center justify-center border-gray-400 rounded-full cursor-pointer"
      onClick={() => setIsDark(!isDark)}
    >
      <div className="flex items-center gap-2 text-gray-800">
        {isDark ? <Sun /> : <Moon />}
      </div>
    </div>
  );
};

export default ThemeToggleUI;

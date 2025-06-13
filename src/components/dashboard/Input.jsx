import { Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { useSearch } from "../../context/searchContext";
import { useTranslation } from "react-i18next";

const Input = () => {
  const { setSearchTerm } = useSearch();
  const inputRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const input = inputRef.current;
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        if (input) input.focus();
      }
      if (event.key === "Escape") {
        if (input) {
          input.value = "";
          input.blur();
          setSearchTerm("");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSearchTerm]);

  return (
    <div className="w-full md:w-[50%] flex items-center justify-center">
      <div className="relative w-full">
        <Search
          size={25}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-600"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder={t("Search")}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2.5 pl-12 pr-20 rounded-xl bg-white/20 text-[#2F2E41] placeholder:text-[#888] shadow-inner border border-[#cdd3f0] focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs hidden md:flex items-center gap-1 text-blue-600 font-medium">
          <kbd className="bg-white/60 border border-[#B0B3D6] px-2 py-0.5 rounded-lg font-mono shadow-sm">
            {navigator.platform.includes("Mac") ? "⌘" : "Ctrl"}
          </kbd>
          <kbd className="bg-white/60 border border-[#B0B3D6] px-2 py-0.5 rounded-lg font-mono shadow-sm">
            K
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default Input;

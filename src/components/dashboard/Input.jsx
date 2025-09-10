import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useTranslation } from "react-i18next";
import { GrSearchAdvanced } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "@heroui/tooltip";

const Input = () => {
  const { setSearchTerm, advancedSearchTerm, setAdvancedSearchTerm } =
    useSearch();
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const [expandAdvancedSearch, setExpandAdvancedSearch] = useState(false);

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
    <div className="w-full lg:w-1/2 mt-4 flex flex-col gap-4 px-10 mb-5">
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
        {/* Main Search */}
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-[#e5e5e5]"
          />
          <input
            ref={inputRef}
            type="text"
            placeholder={t("Search")}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-10 pr-28 rounded-xl bg-[#212121] text-[#e5e5e5] placeholder:text-[#888] border border-white/30 focus:ring-2 focus:ring-white/50 outline-none transition-all duration-200"
          />
          {/* Keyboard Shortcuts */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 text-xs text-gray-400 font-mono">
            <kbd className="bg-[#171717] border border-white/30 px-2 py-0.5 rounded">
              ⌘ K
            </kbd>
            <span>|</span>
            <kbd className="bg-[#171717] border border-white/30 px-2 py-0.5 rounded">
              Esc
            </kbd>
          </div>
        </div>

        {/* Advanced Search Button */}
        <Tooltip content="Advanced Search" showArrow>
          <button
            onClick={() => setExpandAdvancedSearch(!expandAdvancedSearch)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/30 text-[#e5e5e5] ${
              expandAdvancedSearch ? "bg-[#2a2a2a]" : "bg-[#171717]"
            } hover:bg-[#2a2a2a] transition`}
          >
            <GrSearchAdvanced size={20} />
            {/* <span className="font-medium text-sm">Advanced</span> */}
          </button>
        </Tooltip>
      </div>

      {/* Advanced Search Input */}
      <AnimatePresence>
        {expandAdvancedSearch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              placeholder={t("Search 'Company' section")}
              value={advancedSearchTerm}
              onChange={(e) => setAdvancedSearchTerm(e.target.value)}
              className="my-2 w-full py-2 px-4 rounded-xl bg-[#212121] text-[#e5e5e5] placeholder:text-[#888] border border-white/30 focus:ring-2 focus:ring-white/50 outline-none transition-all duration-200"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;

import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useTranslation } from "react-i18next";
import { GrSearchAdvanced } from "react-icons/gr";
import { Tooltip } from "@heroui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

const Input = () => {
  const { setSearchTerm } = useSearch();
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const [expandAdvancedSearch, setExpandAdvancedSearch] = useState(false);
  const [advancedSearchTerm, setAdvancedSearchTerm] = useState("");

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
    <div className="w-full md:w-[80%] flex items-center gap-2">
      {/* Basic Search */}
      <div className="w-[40%] flex items-center">
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
            className="w-full py-2.5 pl-12 pr-20 rounded-full bg-white/20 text-[#2F2E41] placeholder:text-[#888] shadow-inner border border-[#cdd3f0] focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs hidden md:flex items-center gap-1 text-blue-600 font-medium">
            <kbd className="bg-white/60 border border-[#B0B3D6] px-2 py-0.5 rounded-lg font-mono shadow-sm">
              {navigator.platform.includes("Mac") ? "⌘" : "Ctrl"}
            </kbd>
            <kbd className="bg-white/60 border border-[#B0B3D6] px-2 py-0.5 rounded-lg font-mono shadow-sm">
              K
            </kbd>
            <span> | </span>
            <kbd className="bg-white/60 border border-[#B0B3D6] px-2 py-0.5 rounded-lg font-mono shadow-sm">
              Esc
            </kbd>
          </div>
        </div>
      </div>
      <Tooltip content="Advanced Search" showArrow={true}>
        <div
          className="p-2.5 rounded-full cursor-pointer shadow-inner bg-white/20 text-[#2F2E41] border border-[#cdd3f0]"
          onClick={() => setExpandAdvancedSearch(!expandAdvancedSearch)}
        >
          <GrSearchAdvanced size={25} className="text-blue-600" />
        </div>
      </Tooltip>

      <AnimatePresence>
        {expandAdvancedSearch && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "30%" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search 'Company' section"
              value={advancedSearchTerm}
              onChange={(e) => setAdvancedSearchTerm(e.target.value)}
              className="w-full py-2.5 px-4 rounded-full bg-white/20 text-[#2F2E41] placeholder:text-[#888] shadow-inner border border-[#cdd3f0] focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200 ml-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;

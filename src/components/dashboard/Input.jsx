import { Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { useSearch } from "../../context/searchContext";

const Input = () => {
  const { setSearchTerm } = useSearch();
  const inputRef = useRef(null);

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
    <div className="w-[50%] flex items-center justify-center">
      <div className="relative w-full">
        <Search
          size={25}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#47569E]"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 rounded-full bg-[#E7E9F4] outline-none focus:outline-blue-300 placeholder:text-[#47569E]"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#47569E] hidden md:flex items-center space-x-1">
          <kbd className="bg-white/70 border border-[#B0B3D6] px-1.5 py-0.5 rounded text-xs font-mono shadow-sm">
            {navigator.platform.includes("Mac") ? "⌘" : "Ctrl"}
          </kbd>
          <kbd className="bg-white/70 border border-[#B0B3D6] px-1.5 py-0.5 rounded text-xs font-mono shadow-sm">
            K
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default Input;

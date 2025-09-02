import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import GetStartedButton from "./ui/GetStartedButton";
import { useNavigate } from "react-router-dom";
import GithubLink from "./ui/GithubLink";
import ThemeToggleUI from "./ui/ThemeToggleUI";

const Header = ({ activeSections }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const options = ["home", "about", "offer", "demo", "security", "contact"];

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 w-full bg-[#0a0a0a] z-50 h-fit px-4 py-0.5">
      {/* Left side: Logo + Navigation */}
      <div className="flex items-center gap-6">
        <Logo />
        {!isMobile && (
          <div className="flex items-center gap-4">
            {options.map((option, i) => (
              <a
                href={`#${option.toLowerCase()}`}
                key={i}
                className={`text-md capitalize px-3 py-1 rounded-md transition-all duration-200 ${
                  activeSections === option
                    ? "underline text-[#e5e5e5]"
                    : "text-[#e5e5e5] hover:bg-[#262626]"
                }`}
              >
                {option}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Right side */}
      {!isMobile ? (
        <a
          href="https://github.com/DavidAsrorxonov/JST-2.0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center justify-center px-2 py-1 hover:bg-[#262626] cursor-pointer rounded-lg transition-colors"
        >
          <img src="/svgs/GitHub_dark.svg" className="w-6 h-6" />
          <p className="text-sm text-[#e5e5e5]">GitHub</p>
        </a>
      ) : (
        <div className="flex gap-3 items-center justify-center">
          <div
            className="flex items-center justify-center cursor-pointer px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-full transition-all duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Menu size={18} />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-full h-fit bg-gray-200 rounded-b-[20px] border border-gray-100 z-50">
          <div className="flex flex-col justify-center items-center gap-3 p-3 text-base">
            <div
              className="flex items-center ml-auto w-fit p-1.5 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition-all duration-300"
              onClick={() => setShowMenu(false)}
            >
              <X size={18} />
            </div>
            {options.map((option, i) => (
              <a
                href={`#${option.toLowerCase()}`}
                key={i}
                className={`flex capitalize justify-center items-center px-2 py-1 w-full rounded-md transition-all duration-200 ${
                  activeSections === option
                    ? "underline text-[#e5e5e5] bg-[#262626]"
                    : "text-[#e5e5e5] hover:bg-[#262626]"
                }`}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

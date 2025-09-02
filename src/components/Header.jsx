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
    <div className="flex justify-between items-center fixed top-0 left-0 w-full bg-[#0a0a0a] z-50 h-fit px-4 py-2 md:py-0.5">
      <div className="flex items-center gap-6">
        {!isMobile ? (
          <>
            <Logo />
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
          </>
        ) : (
          <div
            className="flex items-center gap-4 text-[#e5e5e5]"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? <X /> : <Menu />}
            Menu
          </div>
        )}
      </div>

      <a
        href="https://github.com/DavidAsrorxonov/JST-2.0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 items-center justify-center px-2 py-1 hover:bg-[#262626] cursor-pointer rounded-lg transition-colors"
      >
        <img src="/svgs/GitHub_dark.svg" className="w-6 h-6" />
        <p className="text-sm text-[#e5e5e5]">GitHub</p>
      </a>

      {isMobile && showMenu && (
        <div
          className="absolute min-h-screen top-full left-0 w-full 
               bg-black/60 backdrop-blur-md 
               text-[#e5e5e5] z-40 px-4 py-6"
        >
          <div className="flex flex-col gap-4">
            <label className="text-sm text-gray-400">Menu</label>
            {options.map((option, i) => (
              <a
                href={`#${option.toLowerCase()}`}
                key={i}
                className={`capitalize text-3xl font-bold px-3 py-2 rounded-md transition-all duration-200 ${
                  activeSections === option
                    ? "underline text-white"
                    : "text-white"
                }`}
                onClick={() => setShowMenu(false)}
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

import { useState } from "react";
import Logo from "../Logo";
import Notification from "./Notification";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import Events from "./Events";
import NewsIcons from "../news/NewsIcons";
import { useTranslation } from "react-i18next";
import ToDo from "./ToDo";
import { Menu, X } from "lucide-react";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const options = [
    "Dashboard",
    "Progress",
    "Companies",
    "Events",
    "Support",
    "Archive",
  ];

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="hidden xl:flex items-center gap-7 text-gray-600 ml-6">
            {options.map((option, idx) => (
              <div
                key={idx}
                className="text-lg font-semibold cursor-pointer hover:text-gray-800"
                onClick={() => navigate(`/${option.toLowerCase()}`)}
              >
                {t(option)}
              </div>
            ))}
          </div>
        </div>

        {/* Right side (Always visible icons) */}
        <div className="flex items-center justify-center gap-4">
          <div className="xl:hidden flex items-center justify-center gap-3">
            <Events />
            <Notification />
            <Profile />
          </div>

          <div className="hidden xl:flex items-center gap-5">
            <ToDo />
            <NewsIcons />
            <Events />
            <Profile />
          </div>

          {/* Hamburger for mobile nav */}
          <button
            className="xl:hidden text-gray-700 bg-gray-100 p-2 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="xl:hidden px-4 pt-2 pb-4 bg-white border-t">
          <div className="flex flex-col gap-4">
            {options.map((option, idx) => (
              <div
                key={idx}
                className="text-base font-semibold text-gray-700 hover:text-gray-900 cursor-pointer"
                onClick={() => {
                  navigate(`/${option.toLowerCase()}`);
                  setIsMenuOpen(false);
                }}
              >
                {t(option)}
              </div>
            ))}

            <div className="flex gap-4 mt-4">
              <ToDo />
              <NewsIcons />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;

import { useState } from "react";
import Logo from "../Logo";
import Notification from "./Notification";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import Events from "./Events";
import NewsIcons from "../news/NewsIcons";
import { useTranslation } from "react-i18next";
import ToDo from "./ToDo";
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  TrendingUp,
  Building2,
  CalendarDays,
  LifeBuoy,
  Archive,
} from "lucide-react";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navOptions = [
    {
      label: "Dashboard",
      path: "/dashboard",
      description: "Your central hub for tracking everything.",
      icon: <LayoutDashboard className="w-6 h-6 text-[#e5e5e5]" />,
    },
    {
      label: "Progress",
      path: "/progress",
      description: "Visualize and analyze your job journey.",
      icon: <TrendingUp className="w-6 h-6 text-[#e5e5e5]" />,
    },
    {
      label: "Companies",
      path: "/companies",
      description: "Keep tabs on the companies you follow.",
      icon: <Building2 className="w-6 h-6 text-[#e5e5e5]" />,
    },
    {
      label: "Events",
      path: "/events",
      description: "Stay on top of upcoming interviews & fairs.",
      icon: <CalendarDays className="w-6 h-6 text-[#e5e5e5]" />,
    },
    {
      label: "Support",
      path: "/support",
      description: "Get help and support when you need it.",
      icon: <LifeBuoy className="w-6 h-6 text-[#e5e5e5]" />,
    },
    {
      label: "Archive",
      path: "/archive",
      description: "View your past applications and notes.",
      icon: <Archive className="w-6 h-6 text-[#e5e5e5]" />,
    },
  ];

  const utilitiesOptions = [
    { label: "To-Do List", component: <ToDo /> },
    { label: "Dev News", component: <NewsIcons /> },
    { label: "Events", component: <Events /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/30">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 h-14">
        {/* Left: Logo + Dropdowns */}
        <div className="flex items-center gap-6">
          <Logo />

          {/* Desktop Dropdowns */}
          <nav className="hidden lg:flex items-center gap-4 text-[#e5e5e5]">
            {/* Navigation Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-lg font-medium px-3 py-1 rounded-full hover:bg-[#171717] transition">
                {t("Navigation")}
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>
              <div className="absolute left-0 top-full w-[650px] bg-[#171717] border border-white/30 rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <ul className="grid grid-cols-2 p-4">
                  {navOptions.map((opt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#212121] cursor-pointer transition"
                      onClick={() => navigate(opt.path)}
                    >
                      <div className="flex items-center justify-center">
                        {opt.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm text-[#e5e5e5]">
                          {t(opt.label)}
                        </span>
                        <span className="text-xs text-gray-400">
                          {opt.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Utilities Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-lg font-medium px-3 py-1 rounded-full hover:bg-[#171717] transition">
                {t("Utilities")}
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>
              <div className="absolute left-0 top-full w-[650px] bg-[#171717] border border-white/30 rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <ul className="grid grid-cols-2 p-4">
                  {utilitiesOptions.map((opt, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 hover:bg-[#212121] p-2 rounded-lg cursor-pointer"
                    >
                      {opt.component ? opt.component : t(opt.label)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 text-[#e5e5e5]">
          {/* Desktop actions */}
          <div className="flex items-center gap-4">
            <Notification />
            <Profile />
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md bg-[#171717] border border-white/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-14 w-full h-screen bg-black/60 backdrop-blur-3xl text-[#e5e5e5] z-50 px-4 py-6 gap-4 overflow-y-auto pb-20">
          <nav className="flex flex-col items-start justify-start gap-4">
            <label className="text-xl text-white/60">Navigation</label>
            {navOptions.map((opt, idx) => (
              <li
                key={idx}
                className="flex w-full items-start gap-3 p-3 rounded-lg hover:bg-[#171717] cursor-pointer transition border border-dashed border-white/30"
                onClick={() => {
                  navigate(opt.path);
                  setIsMenuOpen(false);
                }}
              >
                <div className="flex items-center justify-center">
                  {opt.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-[#e5e5e5]">
                    {t(opt.label)}
                  </span>
                  <span className="text-xs text-gray-400">
                    {opt.description}
                  </span>
                </div>
              </li>
            ))}
          </nav>

          <div className="mt-6">
            <label className="text-xl text-white/60 mt-6">Utilities</label>
            <div className="flex flex-col w-full justify-center gap-6 mt-6">
              <ToDo />
              <NewsIcons />
              <Events />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;

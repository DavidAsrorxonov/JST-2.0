import { ArrowLeft, House } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const NavigationButtons = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isLargeDesktop = windowWidth >= 1440;

  return (
    <div
      className={`z-50 flex gap-2 ${
        isLargeDesktop
          ? "absolute top-6 left-6"
          : "fixed bottom-6 left-1/2 transform -translate-x-1/2"
      }`}
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center px-3 py-1 bg-[#171717] transition rounded-lg border border-white/30 gap-2 text-[#e5e5e5] font-semibold"
      >
        <ArrowLeft size={20} />
        {!isMobile && t("Back")}
      </button>
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center px-3 py-1 bg-[#171717] transition rounded-lg border border-white/30 gap-2 text-[#e5e5e5] font-semibold"
      >
        <House size={20} />
        {!isMobile && t("Home")}
      </button>
    </div>
  );
};

export default NavigationButtons;

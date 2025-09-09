import Logo from "../Logo";
import { ChartNoAxesCombined } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProgressHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="w-full border-b border-white/30 bg-[#0a0a0a] px-6 py-4 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <h1 className="text-lg font-semibold text-[#e5e5e5]">
              {t("Progress")}
            </h1>
            <ChartNoAxesCombined size={20} />
          </div>
          <p className="text-sm text-[#e5e5e5]/80">
            {t("Keep track of your job search progress")}.
          </p>
        </div>
      </div>
    </header>
  );
};

export default ProgressHeader;

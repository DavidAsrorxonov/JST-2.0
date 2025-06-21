import Logo from "../Logo";
import { getTimeOfDay } from "../../lib/utils/getTimeOfDay";
import { useTranslation } from "react-i18next";

const EventHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { t } = useTranslation();

  return (
    <header className="w-full border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              {t("Event Manager")}
            </h1>
            <p className="text-sm text-gray-500">
              {getTimeOfDay()}, {user?.firstName}.{" "}
              {t("Manage your events below")}.
            </p>
          </div>
        </div>
        {user && (
          <div className="text-right text-sm text-gray-600">
            <div className="font-medium text-gray-800">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-xs text-gray-500">ID: {user.id}</div>
            <div className="text-xs text-gray-400">{user.email}</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EventHeader;

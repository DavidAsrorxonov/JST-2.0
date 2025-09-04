import { useState } from "react";
import { useUser } from "../../context/userContext";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { useDisclosure, Switch } from "@heroui/react";
import {
  UserRound,
  UserRoundPen,
  ShieldCheck,
  Languages,
  LogOut,
  Lock,
  Trash2,
  Globe,
  Smartphone,
} from "lucide-react";
import { MoonIcon } from "../../../public/icons/MoonIcon";
import { SunIcon } from "../../../public/icons/SunIcon";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const user = JSON.parse(localStorage.getItem("user"));
  const userInitials = user.firstName[0] + user.lastName[0];
  const userFullName = `${user.firstName} ${user.lastName}`;
  const userEmail = user.email;
  const userId = user.id;

  const chosenLanguage = localStorage.getItem("i18nextLng");

  const { logout } = useUser();

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const languages = [
    { value: "en", label: "English", flag: "🇬🇧" },
    { value: "ru", label: "Русский", flag: "🇷🇺" },
    { value: "uz", label: "O'zbek", flag: "🇺🇿" },
  ];

  return (
    <>
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-[#171717] border border-white/30 transition"
        onClick={onOpen}
      >
        <span className="text-[#e5e5e5] font-semibold">{userInitials}</span>
      </div>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="md"
        backdrop="opaque"
        className="bg-[#171717] text-[#e5e5e5] border border-white/30"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <div className="w-full flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#171717] border border-white/30 flex items-center justify-center">
                    <UserRound className="text-[#e5e5e5]" size={30} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-xl text-[#e5e5e5]">
                      {userFullName}
                    </div>
                    <div className="text-sm text-[#e5e5e5]/70">{userEmail}</div>
                  </div>
                </div>
              </DrawerHeader>

              <DrawerBody className="space-y-6 text-[#e5e5e5]">
                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <ShieldCheck size={18} /> {t("Account Info")}
                  </h2>
                  <div className="mt-2 space-y-1 text-sm">
                    <div>
                      <strong>{t("Account owner")}:</strong> {userFullName}
                    </div>
                    <div>
                      <strong>{t("User ID")}:</strong> {userId}
                    </div>
                    <div>
                      <strong>{t("Status")}:</strong>{" "}
                      <span className="text-green-600 font-medium">
                        {t("Active")}
                      </span>
                      {" | "}
                      <span className="text-blue-600 font-medium">
                        {t("User")}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Globe size={18} /> {t("Accessibility")}
                  </h2>
                  <div className="flex items-center justify-between mt-2">
                    <div className="font-medium">{t("Theme Mode")}</div>
                    <Switch
                      defaultSelected
                      endContent={<MoonIcon />}
                      startContent={<SunIcon />}
                    />
                  </div>
                  <div className="mt-3">
                    <div className="font-medium mb-1 flex items-center gap-2">
                      <Languages size={18} /> {t("Language")}
                    </div>
                    <div className="flex gap-2">
                      {languages.map(({ flag, label, value }, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-1 px-2 py-1 border border-white/30 rounded-lg text-sm cursor-pointer ${
                            value === chosenLanguage
                              ? "bg-[#212121] text-[#e5e5e5] border border-white/30 transition-all"
                              : "bg-[#171717] text-[#e5e5e5] transition-all"
                          }`}
                          onClick={() => i18n.changeLanguage(value)}
                          onChange={localStorage.setItem("lang", value)}
                        >
                          <span>{flag}</span>
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Lock size={18} /> {t("Security")}
                  </h2>
                  <div className="mt-2 flex flex-col gap-2 text-sm">
                    <button
                      className="flex items-center gap-2 text-[#e5e5e5] hover:text-yellow-600 transition"
                      onClick={() => navigate("/password-reset")}
                    >
                      <Lock size={16} /> {t("Change Password")}
                    </button>
                    <button
                      className="flex items-center gap-2 text-[#e5e5e5] hover:text-green-600 transition"
                      onClick={() => navigate("/two-factor-auth")}
                    >
                      <ShieldCheck size={16} /> {t("Two-Factor Authentication")}
                    </button>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 text-[#e5e5e5] hover:text-red-600 transition"
                    >
                      <LogOut size={16} /> {t("Logout")}
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold text-[#e5e5e5] mb-2 flex items-center gap-1">
                    <Smartphone size={16} /> {t("Device Info")}
                  </h4>
                  <div className="text-sm text-[#e5e5e5]">
                    Browser: {navigator.userAgent.split(")")[0]})
                  </div>
                  <div className="text-sm text-[#e5e5e5]">
                    OS: {navigator.platform}
                  </div>
                  <div className="text-sm text-[#e5e5e5]">
                    Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold text-[#e5e5e5] mb-2">
                    {t("Account Options")}
                  </h4>
                  <button
                    className="flex items-center gap-2 text-yellow-600 hover:underline text-sm"
                    onClick={() => navigate("/deactivate-account")}
                  >
                    <ShieldCheck size={16} /> {t("Deactivate Account")}
                  </button>
                  <button
                    className="flex items-center gap-2 text-red-600 hover:underline text-sm"
                    onClick={() => navigate("/account-delete")}
                  >
                    <Trash2 size={16} /> {t("Delete Account Permanently")}
                  </button>
                </div>
              </DrawerBody>

              <DrawerFooter>
                <button
                  onClick={onClose}
                  className="px-3 py-1 border border-white/30 text-[#e5e5e5] rounded-lg transition"
                >
                  {t("Close")}
                </button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Profile;

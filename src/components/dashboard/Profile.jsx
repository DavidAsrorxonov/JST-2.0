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

const Profile = () => {
  const [imageURL, setImageURL] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const user = JSON.parse(localStorage.getItem("user"));
  const userInitials = user.firstName[0] + user.lastName[0];
  const userFullName = `${user.firstName} ${user.lastName}`;
  const userEmail = user.email;
  const userId = user.id;

  const { logout } = useUser();

  const languages = [
    { value: "en", label: "English", flag: "🇬🇧" },
    { value: "ru", label: "Русский", flag: "🇷🇺" },
    { value: "uz", label: "O'zbek", flag: "🇺🇿" },
  ];

  return (
    <>
      <div
        className="flex items-center justify-center w-14 h-14 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 transition"
        onClick={onOpen}
      >
        <span className="text-black font-semibold">{userInitials}</span>
      </div>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="md"
        backdrop="opaque"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <div className="w-full flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
                    <UserRound className="text-gray-600" size={30} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-xl text-gray-800">
                      {userFullName}
                    </div>
                    <div className="text-sm text-gray-500">{userEmail}</div>
                  </div>
                  <div className="ml-auto text-purple-600 hover:underline flex items-center gap-1 cursor-pointer">
                    <UserRoundPen size={16} />
                    Edit
                  </div>
                </div>
              </DrawerHeader>

              <DrawerBody className="space-y-6 text-gray-700">
                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <ShieldCheck size={18} /> Account Info
                  </h2>
                  <div className="mt-2 space-y-1 text-sm">
                    <div>
                      <strong>Account Owner:</strong> {userFullName}
                    </div>
                    <div>
                      <strong>User ID:</strong> {userId}
                    </div>
                    <div>
                      <strong>Status:</strong>{" "}
                      <span className="text-green-600 font-medium">Active</span>
                      {" | "}
                      <span className="text-blue-600 font-medium">User</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Globe size={18} /> Accessibility
                  </h2>
                  <div className="flex items-center justify-between mt-2">
                    <div className="font-medium">Theme Mode</div>
                    <Switch
                      defaultSelected
                      endContent={<MoonIcon />}
                      startContent={<SunIcon />}
                    />
                  </div>
                  <div className="mt-3">
                    <div className="font-medium mb-1 flex items-center gap-2">
                      <Languages size={18} /> Language
                    </div>
                    <div className="flex gap-2">
                      {languages.map(({ flag, label }, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100 cursor-pointer"
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
                    <Lock size={18} /> Security
                  </h2>
                  <div className="mt-2 flex flex-col gap-2 text-sm">
                    <button className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition">
                      <Lock size={16} /> Change Password
                    </button>
                    <button className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition">
                      <ShieldCheck size={16} /> Two-Factor Authentication
                    </button>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                    <Smartphone size={16} /> Device Info
                  </h4>
                  <div className="text-sm text-gray-500">
                    Browser: {navigator.userAgent.split(")")[0]})
                  </div>
                  <div className="text-sm text-gray-500">
                    OS: {navigator.platform}
                  </div>
                  <div className="text-sm text-gray-500">
                    Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Account Options
                  </h4>
                  <button className="flex items-center gap-2 text-yellow-600 hover:underline text-sm">
                    <ShieldCheck size={16} /> Deactivate Account
                  </button>
                  <button className="flex items-center gap-2 text-red-600 hover:underline text-sm">
                    <Trash2 size={16} /> Delete Account Permanently
                  </button>
                </div>
              </DrawerBody>

              <DrawerFooter>
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-100 transition"
                >
                  Close
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

import { useEffect, useRef, useState } from "react";
import { CircleHelp, X } from "lucide-react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const ShortcutHelp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const { t } = useTranslation();

  const shortcuts = [
    { keys: ["⌘", "Shift", "p"], action: "Go to Progress" },
    { keys: ["⌘", "Shift", "e"], action: "Go to Events" },
    { keys: ["⌘", "Shift", "s"], action: "Go to Support" },
    { keys: ["⌘", "Shift", "b"], action: "Go to Dashboard" },
    { keys: ["⌘", "Shift", "o"], action: "Go to Companies" },
    { keys: ["⌘", "<"], action: "Go to previous page" },
    { keys: ["⌘", ">"], action: "Go to next page" },
    { keys: ["⌘", "k"], action: "Search" },
  ];

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 }
      );
    }
  }, [isOpen]);

  const Key = ({ children }) => (
    <kbd className="bg-gradient-to-br from-[#1e1e1e] to-[#262626] border border-white/20 px-2 py-0.5 rounded-md font-mono text-sm shadow-sm text-gray-200">
      {children}
    </kbd>
  );

  return (
    <>
      <div
        className="fixed bottom-4 right-5 z-40 bg-[#212121] hover:bg-[#262626] border border-white/30 text-gray-200 shadow-lg p-3 rounded-full cursor-pointer transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <CircleHelp size={24} />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-[#171717]/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-lg p-6 relative border border-white/20"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              ⌨️ {t("Keyboard Shortcuts")}
            </h2>

            <ul className="space-y-3">
              {shortcuts.map((shortcut, idx) => (
                <li
                  key={idx}
                  className="flex items-center font-mono justify-between bg-[#212121] hover:bg-[#262626] border border-white/20 p-3 rounded-lg transition"
                >
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, i) => (
                      <Key key={i}>{key}</Key>
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">
                    {t(shortcut.action)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-[#212121] text-gray-200 border border-white/20 text-sm hover:bg-[#262626] transition rounded-lg"
              >
                {t("Close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShortcutHelp;

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
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [isOpen]);

  const Key = ({ children }) => (
    <kbd className="bg-white/60 border border-[#B0B3D6] px-2 py-0.5 rounded-md font-mono text-sm shadow-sm text-blue-600">
      {children}
    </kbd>
  );

  return (
    <>
      <div
        className="fixed bottom-4 right-5 z-50 bg-blue-100 hover:bg-blue-200 border border-blue-500 text-blue-600 shadow-md p-3 rounded-full cursor-pointer transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <CircleHelp size={26} />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          ref={modalRef}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative border border-gray-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ⌨️ {t("Keyboard Shortcuts")}
            </h2>

            <ul className="space-y-4">
              {shortcuts.map((shortcut, idx) => (
                <li
                  key={idx}
                  className="flex items-center font-mono justify-between bg-blue-50 hover:bg-blue-100 border border-blue-500 p-3 rounded-lg transition"
                >
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, i) => (
                      <Key key={i}>{key}</Key>
                    ))}
                  </div>
                  <span className="text-gray-700 text-sm">
                    {t(shortcut.action)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-blue-100 text-blue-600 border border-blue-500 text-sm hover:bg-blue-200 transition rounded-full"
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

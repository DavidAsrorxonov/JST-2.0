import Logo from "../Logo";
import { Check } from "lucide-react";

const ToDoHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="w-full border-b border-white/30 bg-[#0a0a0a] px-6 py-4 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="flex items-center gap-1">
              <h1 className="text-lg font-semibold text-[#e5e5e5]">To-Do</h1>
              <Check size={20} />
            </div>
            <p className="text-sm text-[#e5e5e5]/80">
              Keep track of your job search progress.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ToDoHeader;

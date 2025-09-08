import Logo from "../Logo";
import { ArchiveIcon } from "lucide-react";

const ArchiveHeader = () => {
  return (
    <header className="w-full border-b border-white/30 bg-[#0a0a0a] px-6 py-4 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="flex items-center gap-1">
              <h1 className="text-lg font-semibold text-[#e5e5e5]">Archive</h1>
              <ArchiveIcon size={20} />
            </div>
            <p className="text-sm text-[#e5e5e5]/80">
              A record of your past tasks, neatly archived for reference.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArchiveHeader;

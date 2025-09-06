import Logo from "../Logo";

const SupportHeader = () => {
  return (
    <header className="w-full border-b border-white/20 bg-[#0a0a0a] px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <h1 className="text-lg font-semibold text-[#e5e5e5]">Support</h1>
            <p className="text-sm text-[#a3a3a3]">
              We’re here to help you anytime.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SupportHeader;

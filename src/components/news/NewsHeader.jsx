import Logo from "../Logo";

const NewsHeader = () => {
  return (
    <>
      <header className="w-full border-b border-white/30 bg-[#0a0a0a] px-6 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <h1 className="text-lg font-semibold text-[#e5e5e5]">News</h1>
              <p className="text-sm text-[#e5e5e5]/80">
                Stay up-to-date with the latest news and updates.
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NewsHeader;

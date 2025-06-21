import Logo from "../Logo";

const SupportHeader = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <h1 className="text-lg font-semibold text-gray-800">Support</h1>
            <p className="text-sm text-gray-500">
              We're here to help. Send us your suggestions or questions!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SupportHeader;

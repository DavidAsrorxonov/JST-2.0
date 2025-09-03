import { steps } from "../constants/steps";

const Offer = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-start px-6 mt-5 bg-[#0a0a0a]"
      id="workflow"
    >
      <h1 className="w-full text-left text-4xl md:text-5xl font-extrabold text-[#e5e5e5] mb-12">
        The Workflow
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#e5e5e5]/20" />
          <div className="flex flex-col gap-12">
            {steps.map((step) => (
              <div key={step.id} className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e5e5e5] text-[#0a0a0a] font-bold text-lg z-10">
                  {step.id}
                </div>

                <div className="bg-[#171717] border border-[#e5e5e5]/20 rounded-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-[#e5e5e5]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 mb-auto">
          <h2 className="text-3xl font-bold text-[#e5e5e5]">
            Why This Workflow Works 🚀
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#171717] border border-[#e5e5e5]/20 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-[#e5e5e5]">80%</h3>
              <p className="text-gray-400 text-sm">Less Stress</p>
            </div>
            <div className="bg-[#171717] border border-[#e5e5e5]/20 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-[#e5e5e5]">50%+</h3>
              <p className="text-gray-400 text-sm">Time Saved</p>
            </div>
            <div className="bg-[#171717] border border-[#e5e5e5]/20 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-[#e5e5e5]">100%</h3>
              <p className="text-gray-400 text-sm">Clarity</p>
            </div>
            <div className="bg-[#171717] border border-[#e5e5e5]/20 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-[#e5e5e5]">∞</h3>
              <p className="text-gray-400 text-sm">Motivation</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 text-center md:text-left">
            No more juggling spreadsheets or sticky notes — track, filter, and
            visualize your job hunt in one smooth flow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;

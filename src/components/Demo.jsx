import { offerOptions } from "../constants/offerOptions";
import "../styles/Scroll.css";

const Demo = () => {
  const firstRow = offerOptions.slice(0, 3);
  const secondRow = offerOptions.slice(3);

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-start mt-10 px-6"
      id="demo"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 w-full text-left text-[#e5e5e5]">
        With <span className="text-[#22c55e] underline">JST</span>, you get
      </h1>

      <div className="w-full space-y-16">
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll-left">
            {[...firstRow, ...firstRow].map(
              ({ id, icon, title, content }, i) => (
                <div
                  key={id + "-top-" + i}
                  className="shrink-0 w-[500px] md:w-[600px] h-[260px] bg-[#171717] border border-white/30 rounded-2xl p-6 mx-6 flex flex-col"
                >
                  <div className="text-5xl mb-4">{icon}</div>
                  <h3 className="text-2xl font-bold text-[#e5e5e5] mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-base">{content}</p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll-right">
            {[...secondRow, ...secondRow].map(
              ({ id, icon, title, content }, i) => (
                <div
                  key={id + "-bottom-" + i}
                  className="shrink-0 w-[500px] md:w-[600px] h-[260px] bg-[#171717] border border-white/30 rounded-2xl p-6 mx-6 flex flex-col"
                >
                  <div className="text-5xl mb-4">{icon}</div>
                  <h3 className="text-2xl font-bold text-[#e5e5e5] mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-base">{content}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

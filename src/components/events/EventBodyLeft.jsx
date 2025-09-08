import { Lightbulb } from "lucide-react";
import { programmingTips } from "../../constants/programmingTips";

const EventBodyLeft = () => {
  return (
    <div className="p-6 bg-[#171717] border border-white/30 rounded-lg shadow-lg h-[80vh] overflow-y-auto">
      <h1 className="text-3xl font-bold text-[#e5e5e5]">
        You want to become a programmer?
      </h1>
      <h2 className="text-xl font-bold flex items-center text-[#e5e5e5] gap-3 mb-6">
        <Lightbulb size={24} />
        Here are some programming{" "}
        <span className="text-yellow-600">Tips & Resources</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {programmingTips.map((tip, index) => (
          <a
            key={index}
            href={tip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col border border-white/30 rounded-xl hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={tip.img}
              alt={tip.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4 text-[#e5e5e5] font-medium hover:underline">
              {tip.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EventBodyLeft;

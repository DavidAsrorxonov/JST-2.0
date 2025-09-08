import { Lightbulb } from "lucide-react";
import { programmingTips } from "../../constants/programmingTips";

const EventBodyLeft = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-yellow-600 mb-6">
        <Lightbulb size={24} /> Tips & Resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {programmingTips.map((tip, index) => (
          <a
            key={index}
            href={tip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={tip.img}
              alt={tip.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4 text-blue-700 font-medium hover:underline">
              {tip.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EventBodyLeft;

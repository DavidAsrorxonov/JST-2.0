import { Lightbulb } from "lucide-react";

const tips = [
  {
    title: "Learn React (Official Docs)",
    url: "https://react.dev/learn",
    img: "https://reactjs.org/logo-og.png",
  },
  {
    title: "Frontend Developer Roadmap",
    url: "https://roadmap.sh/frontend",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*Kalw2Q-gkpyU2wcgq2ZoDA.png",
  },
  {
    title: "JavaScript Tips & Tricks - FreeCodeCamp",
    url: "https://www.freecodecamp.org/news/tag/javascript/",
    img: "https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15..v1627670281.png",
  },
  {
    title: "CSS Tricks and Layout Techniques",
    url: "https://css-tricks.com/",
    img: "https://w3bits.com/wp-content/uploads/css-tricks-search-box.jpg",
  },
  {
    title: "MDN Web Docs (HTML/CSS/JS)",
    url: "https://developer.mozilla.org/en-US/",
    img: "https://cdn.bsky.app/img/banner/plain/did:plc:a4klb3lge3phlc4az4uspfpo/bafkreihlhtzwjkoevycfogykbaj3xa6qhkcgei23qkio3jhirrruoxdyxy@jpeg",
  },
];

const EventBodyLeft = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold flex items-center gap-3 text-yellow-600 mb-6">
        <Lightbulb size={24} /> Tips & Resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tips.map((tip, index) => (
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

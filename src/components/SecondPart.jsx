import { aboutUs } from "../constants/aboutUs";
import "../styles/Logo.css";
import Card from "./ui/Card";

const SecondPart = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-start px-6 py-12"
      id="about"
    >
      <h1 className="w-full text-4xl md:text-5xl font-extrabold mb-12 text-[#e5e5e5] text-center">
        Take Control of Your&nbsp;{" "}
        <span className="text-[#22c55e] underline">Job Hunt</span>
      </h1>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          w-full
        "
      >
        {aboutUs.map(({ id, icon, title, content }) => (
          <Card icon={icon} title={title} content={content} key={id} />
        ))}
      </div>
    </div>
  );
};

export default SecondPart;

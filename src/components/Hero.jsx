import GetStartedButton from "./ui/GetStartedButton";
import "../styles/Hero.css";
import useTypingEffect from "../lib/utils/useTypingEffect";

const Hero = () => {
  const animatedText = useTypingEffect("Job Site Tracker", 200);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-start px-6 pt-32"
      id="home"
    >
      <div className="text-[#e5e5e5] text-xs px-4 py-1 rounded-full bg-[#262626]">
        New Version Coming Soon &nbsp; 🚀
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-[#e5e5e5] w-full text-center m-7">
        JST | {animatedText}
      </h1>
      <div className="z-10 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#e5e5e5] leading-tight">
          Track Your Job Applications{" "}
          <span className="font-bold underline text-5xl md:text-6xl">
            Effortlessly
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#e5e5e5] animate-fade-in">
          Stay organized and on top of your job search with our smart
          application tracker. Visualize progress, manage tasks, and never miss
          an opportunity.
        </p>
        <div className="mt-10 flex justify-center animate-fade-in">
          <div className="w-40">
            <GetStartedButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

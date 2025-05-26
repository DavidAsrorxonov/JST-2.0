import { SquareArrowOutUpRight } from "lucide-react";
import React, { useState } from "react";

const Demo = () => {
  const [demoClicked, setDemoClicked] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center py-20 px-6 text-black">
      <h1 className="text-5xl font-extrabold">Seeing is believing</h1>
      <div className="relative w-full h-full">
        <img
          src="/images/demo.jpg"
          className={`w-full h-full rounded-xl object-cover mt-10 ${
            demoClicked ? "blur-lg" : ""
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex gap-4 items-center justify-center px-4 py-2 text-2xl text-white font-bold bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-white rounded-full cursor-pointer hover:scale-95 transition-all duration-300"
            onClick={() => setDemoClicked(!demoClicked)}
          >
            Demo{" "}
            <span>
              <SquareArrowOutUpRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

import React, { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import SignInButton from "./SignInButton";
import RegisterButton from "./RegisterButton";
import GetStartedButton from "./GetStartedButton";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMenu, setShowMenu] = useState(false);

  const options = ["Home", "About", "Contact"];

  return (
    <div className="flex justify-between shadow-md fixed top-0 left-0 w-full bg-white z-50">
      <div>
        <Logo />
      </div>
      {!isMobile ? (
        <div className="flex items-center gap-7">
          {options.map((option, i) => (
            <a
              href={`/${option.toLocaleLowerCase()}`}
              key={i}
              className="text-lg font-bold text-gray-600 hover:text-gray-800"
            >
              {option}
            </a>
          ))}

          <div className="flex gap-4 mr-4">
            <SignInButton content={"Sign In"} />
            <RegisterButton content={"Register"} />
          </div>
        </div>
      ) : (
        <div className="flex gap-4 items-center justify-center">
          <GetStartedButton />
          <div
            className="flex items-center justify-center cursor-pointer px-2 py-2 bg-gray-300 hover:bg-gray-400 rounded-full transition-all duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Menu />
          </div>
        </div>
      )}

      {showMenu && (
        <div className="absolute top-0 left-0 w-full h-fit bg-gray-700 rounded-b-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 z-50">
          <div className="flex flex-col justify-center items-center gap-4 p-4 font-bold text-2xl">
            <div
              className="flex items-center ml-auto w-fit p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-all duration-300"
              onClick={() => setShowMenu(false)}
            >
              <X />
            </div>
            {options.map((option, i) => (
              <a
                href={`/${option.toLocaleLowerCase()}`}
                key={i}
                className="flex justify-center items-center text-gray-600 hover:text-gray-800 py-2 w-full rounded-lg"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

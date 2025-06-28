import { useNavigate } from "react-router-dom";
import GithubDark from "/svgs/GitHub_light.svg";

const GithubLink = () => {
  const navigate = useNavigate();

  return (
    <a
      href="https://github.com/DavidAsrorxonov/JST-2.0"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 border-2 flex items-center justify-center border-gray-400 rounded-full cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <img src={GithubDark} alt="github" width={25} height={25} />
        1.0K
      </div>
    </a>
  );
};

export default GithubLink;

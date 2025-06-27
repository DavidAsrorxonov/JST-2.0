import { useNavigate } from "react-router-dom";

const GetStartedButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center px-4 py-2 rounded-full text-black border-2 border-black font-bold cursor-pointer hover:scale-95 transition-all duration-300"
      onClick={() => navigate("/auth")}
    >
      <button>Get Started</button>
    </div>
  );
};

export default GetStartedButton;

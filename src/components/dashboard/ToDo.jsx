import { ListTodo } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ToDo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#171717] border border-white/30 cursor-pointer hover:bg-[#212121] transition"
      onClick={() => navigate("/todos")}
    >
      <ListTodo size={20} className="text-[#e5e5e5]" />
      <span className="text-sm font-medium text-[#e5e5e5]">To-Do</span>
    </div>
  );
};

export default ToDo;

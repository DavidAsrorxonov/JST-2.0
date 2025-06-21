import { ListTodo } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ToDo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-fit h-10 rounded-xl px-4 gap-2 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
        onClick={() => navigate("/todos")}
      >
        <ListTodo size={25} className="text-gray-600" />
        <div className="text-gray-600">To-Do List</div>
      </div>
    </>
  );
};

export default ToDo;

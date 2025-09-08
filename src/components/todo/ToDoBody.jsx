import ToDoBodyLeft from "./ToDoBodyLeft";
import ToDoBodyRight from "./ToDoBodyRight";

const ToDoBody = () => {
  return (
    <div className="flex w-full h-[80vh] overflow-hidden">
      <div className="w-[35%] h-full border-r border-white/30 overflow-y-auto p-4">
        <ToDoBodyRight />
      </div>
      <div className="w-[65%] h-full overflow-y-auto p-4">
        <ToDoBodyLeft />
      </div>
    </div>
  );
};

export default ToDoBody;

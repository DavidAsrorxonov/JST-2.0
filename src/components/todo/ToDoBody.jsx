import React from "react";
import ToDoBodyLeft from "./ToDoBodyLeft";
import ToDoBodyRight from "./ToDoBodyRight";

const ToDoBody = () => {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      <div className="w-1/2">
        <ToDoBodyRight />
      </div>
      <div className="w-1/2">
        <ToDoBodyLeft />
      </div>
    </div>
  );
};

export default ToDoBody;

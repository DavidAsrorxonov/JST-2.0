import React from "react";
import ToDoHeader from "../components/todo/ToDoHeader";
import ToDoBodyLeft from "../components/todo/ToDoBodyLeft";
import ToDoBody from "../components/todo/ToDoBody";

const ToDoPage = () => {
  return (
    <div>
      <ToDoHeader />
      <ToDoBody />
    </div>
  );
};

export default ToDoPage;

import React from "react";
import ToDoHeader from "../components/todo/ToDoHeader";
import ToDoBodyLeft from "../components/todo/ToDoBodyLeft";
import ToDoBody from "../components/todo/ToDoBody";
import Archive from "../components/todo/Archive";

const ToDoPage = () => {
  return (
    <div>
      <ToDoHeader />
      <ToDoBody />
      <Archive />
    </div>
  );
};

export default ToDoPage;

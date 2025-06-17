import React, { useEffect, useState } from "react";
import { useToDo } from "../../context/todoContext";
import { Star, StarOff, Clock } from "lucide-react";

const ToDoBody = () => {
  const { todos, fetchToDos } = useToDo();

  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  return <div className="w-full bg-blue-500">hi</div>;
};

export default ToDoBody;

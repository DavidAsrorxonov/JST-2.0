import React, { useEffect, useState } from "react";
import { useToDo } from "../../context/todoContext";
import { Star, StarOff, Clock, Tag, Loader } from "lucide-react";

const ToDoBodyLeft = () => {
  const { todos, fetchToDos } = useToDo();

  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-2 mt-4">
      <h1 className="text-4xl font-bold">To-Dos</h1>
      {todos.map(
        (
          {
            todo_title,
            todo_duetime,
            todo_priority,
            todo_status,
            todo_category,
            is_important,
          },
          idx
        ) => (
          <div key={idx} className="w-full flex items-start gap-3">
            {is_important && (
              <div className="pt-1">
                <Star className="text-yellow-500" size={20} />
              </div>
            )}
            <div className="border border-gray-300 shadow-inner rounded-xl p-4 w-full bg-white space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-gray-800">
                  {todo_title}
                </div>
                <div>
                  <input type="radio" className="w-6 h-6" />
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Due:{" "}
                {todo_duetime.split("T")[0] +
                  " " +
                  todo_duetime.split("T")[1].split(".")[0]}
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-700 items-center pt-2">
                <div className="flex items-center gap-1">
                  <Loader size={16} />
                  <span>{todo_status}</span>
                </div>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-full ${priorityColors[todo_priority]}`}
                >
                  <Clock size={16} />
                  <span>{todo_priority}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={16} />
                  <span>{todo_category}</span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ToDoBodyLeft;

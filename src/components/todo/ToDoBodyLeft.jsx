import React, { useEffect, useState } from "react";
import { useToDo } from "../../context/todoContext";
import { Star, StarOff, Clock, Tag, Loader, Pen } from "lucide-react";

const ToDoBodyLeft = () => {
  const { todos, fetchToDos } = useToDo();

  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };
  const statusColors = {
    "Not started": "bg-gray-100 text-gray-600",
    "In progress": "bg-blue-100 text-blue-600",
    Completed: "bg-green-100 text-green-600",
    Pending: "bg-blue-100 text-blue-600",
  };

  const categoryColors = [
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-yellow-100 text-yellow-600",
    "bg-red-100 text-red-600",
    "bg-gray-100 text-gray-600",
    "bg-pink-100 text-pink-600",
    "bg-purple-100 text-purple-600",
    "bg-orange-100 text-orange-600",
  ];

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
            <div className="border border-gray-300 shadow-inner rounded-xl p-4 w-full bg-white space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-gray-800">
                  {todo_title}
                </div>
                <div>
                  {is_important ? (
                    <div className="px-2 rounded-lg bg-red-100 text-red-600 border border-red-500 font-semibold">
                      Important
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Due:{" "}
                  {todo_duetime.split("T")[0] +
                    " " +
                    todo_duetime.split("T")[1].split(".")[0]}
                </div>
                <div>
                  <input type="radio" className="w-6 h-6 cursor-pointer" />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-700 items-center pt-2">
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-full ${statusColors[todo_status]}`}
                >
                  <Loader size={16} />
                  <span>{todo_status}</span>
                </div>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-full ${priorityColors[todo_priority]}`}
                >
                  <Clock size={16} />
                  <span>{todo_priority}</span>
                </div>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                    categoryColors[
                      Math.floor(Math.random() * categoryColors.length)
                    ]
                  }`}
                >
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

import React, { useEffect, useState } from "react";
import { useToDo } from "../../context/todoContext";
import { Star, StarOff, Clock } from "lucide-react";

const ToDoBody = () => {
  const { todos, fetchToDos } = useToDo();
  //   const [isImportant, setIsImportant] = useState(
  //     todos.map((todo) => todo.is_important)
  //   );
  //   const [status, setStatus] = useState(todos.map((todo) => todo.todo_status));

  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {todos.map((todo, idx) => {
        return (
          <div
            key={idx}
            className="p-4 rounded-xl shadow-md border border-gray-200 bg-white flex flex-col gap-3 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {todo.todo_title}
              </h2>
              <button onClick={() => setIsImportant(!isImportant)}>
                {todo.is_important === true ? (
                  <Star className="text-yellow-500" />
                ) : (
                  <StarOff className="text-gray-400" />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  priorityColors[todo.todo_priority]
                }`}
              >
                {todo.todo_priority}
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                {todo.todo_category}
              </span>
              <span className="flex items-center gap-1 text-xs">
                <Clock size={16} />
                {todo.todo_duetime}
              </span>
            </div>

            <div>Status: {todo.todo_status}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoBody;

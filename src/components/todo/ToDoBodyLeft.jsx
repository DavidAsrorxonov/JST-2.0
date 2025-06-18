import { useEffect, useState } from "react";
import { useToDo } from "../../context/todoContext";
import { Clock, Tag, Loader, Ellipsis, EllipsisVertical } from "lucide-react";
import axios from "axios";
import { addToast } from "@heroui/toast";

const ToDoBodyLeft = () => {
  const { todos, fetchToDos } = useToDo();
  const [ellipsisClicked, setEllipsisClicked] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

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

  const deleteToDo = async (id) => {
    if (!id) return;
    const response = await axios.delete(
      `http://localhost:3000/api/todos/${id}`
    );
    fetchToDos();
    addToast({
      description: "Task deleted successfully",
      color: "success",
      timeout: 2000,
      shouldShowTimeoutProgress: true,
    });
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleEllipsisClick = (e, idx) => {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY - 80,
      left: rect.left + window.scrollX - 150,
    });
    setEllipsisClicked((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-2 mt-4">
      <h1 className="text-4xl font-bold">To-Dos</h1>
      {todos.map(
        (
          {
            id,
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
                <div className="relative flex items-center gap-2 cursor-pointer">
                  <Ellipsis
                    size={20}
                    onClick={(e) => handleEllipsisClick(e, idx)}
                  />
                  {ellipsisClicked === idx && (
                    <div className="absolute top-0 right-6 z-10">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm w-36 py-1 text-sm">
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800">
                          Mark as Done
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800">
                          Archive
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-500"
                          onClick={() => deleteToDo(id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
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

import { useEffect, useState } from "react";
import { useToDo } from "../../context/todoContext";
import { Clock, Tag, Loader, Ellipsis, ArrowLeft } from "lucide-react";
import axios from "axios";
import { addToast } from "@heroui/toast";
import {
  priorityColors,
  statusColors,
  categoryColors,
} from "../../constants/colors";
import { API_URL } from "../../constants/api";
import EmptyState from "../ui/EmptyState";

const ToDoBodyLeft = () => {
  const { todos, fetchToDos } = useToDo();
  const [ellipsisClicked, setEllipsisClicked] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    fetchToDos();
  }, []);

  const deleteToDo = async (id) => {
    if (!id) return;
    const response = await axios.delete(`${API_URL}/api/todos/${id}`);
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

  const handleMarkAsDone = async (id) => {
    if (!id) return;
    try {
      await axios.delete(`${API_URL}/api/todos/${id}`);

      fetchToDos();
      addToast({
        description: "Task marked as done",
        color: "success",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
    } catch (error) {
      console.log(error);
      addToast({
        description: "Error marking task as done",
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
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

  const handleArchive = async (todoId) => {
    try {
      await axios.post(`${API_URL}/api/archive/todos/${todoId}`);
      addToast({
        description: "Task archived successfully",
        color: "success",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
        radius: "full",
      });
      fetchToDos();
    } catch (error) {
      console.log(error);
      addToast({
        description: "Error archiving task",
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-2 mt-4">
      <h1 className="text-5xl font-bold">To-Dos</h1>
      {todos && todos.length > 0 ? (
        todos.map(
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
            <div key={idx} className="w-full flex items-start gap-3 mb-4">
              <div className="border border-gray-300 shadow-inner rounded-xl p-4 w-full bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-semibold text-gray-800">
                    {todo_title}
                  </div>
                  {is_important && (
                    <div className="px-2 rounded-lg bg-red-100 text-red-600 border border-red-500 font-semibold">
                      Important
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div>
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
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800"
                            onClick={() => handleMarkAsDone(id)}
                          >
                            Mark as Done
                          </button>
                          {todo_status !== "Completed" ? (
                            <button
                              className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800"
                              onClick={() => handleArchive(id)}
                            >
                              Archive
                            </button>
                          ) : (
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800 cursor-not-allowed">
                              Can't archive
                            </button>
                          )}

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
                      categoryColors[todo_category.toLowerCase()]
                    }`}
                  >
                    <Tag size={16} />
                    <span>{todo_category}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      ) : (
        <EmptyState
          title={"No To-Dos Found"}
          subtitle={"You're all caught up!"}
          actionText={"Add a To-Do"}
          icon={<ArrowLeft />}
        />
      )}
    </div>
  );
};

export default ToDoBodyLeft;

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {
  priorityColors,
  statusColors,
  categoryColors,
} from "../../constants/colors";
import { Clock, Loader, Tag, Trash2, Undo2 } from "lucide-react";
import { API_URL } from "../../constants/api";
import gsap from "gsap";
import { addToast } from "@heroui/toast";

const ArchiveLeft = () => {
  const [archivedToDos, setArchivedToDos] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [deleteConfirmationId, setDeleteConfirmationId] = useState(null);
  const { id } = user;
  const confirmDeleteRef = useRef(null);

  const fetchArchivedToDos = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/archive/todos`, {
        params: {
          user_id: id,
        },
      });

      setArchivedToDos(response.data);
    } catch (error) {
      console.error("Error fetching archived To-Dos:", error);
    }
  };

  const deleteArchivedToDo = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      addToast({
        description: "You are not logged in",
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
      return;
    }

    if (!id) return;

    try {
      await axios.delete(`${API_URL}/api/archive/todos/${id}`);
    } catch (error) {
      console.error("Error deleting archived To-Do:", error);
    }
  };

  useEffect(() => {
    fetchArchivedToDos();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      confirmDeleteRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [deleteConfirmationId]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Archived To-Dos</h1>

      {archivedToDos &&
        archivedToDos.map(
          (
            {
              id,
              archived_todo_title,
              archived_todo_duetime,
              archived_todo_priority,
              archived_todo_status,
              archived_todo_category,
              archived_is_important,
              archived_at,
            },
            idx
          ) => (
            <div key={idx} className="w-full flex items-start gap-3 mb-4">
              <div className="border border-gray-300 shadow-inner rounded-xl p-4 w-full bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-semibold text-gray-800">
                    {archived_todo_title}
                  </div>
                  {archived_is_important && (
                    <div className="px-2 rounded-lg bg-red-100 text-red-600 border border-red-500 font-semibold">
                      Important
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div>
                    Due:{" "}
                    {archived_todo_duetime.split("T")[0] +
                      " " +
                      archived_todo_duetime.split("T")[1].split(".")[0]}
                  </div>
                  <div>Archived: {new Date(archived_at).toLocaleString()}</div>
                </div>

                <div className="relative flex flex-wrap gap-4 text-sm text-gray-700 items-center pt-2">
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full ${statusColors[archived_todo_status]}`}
                  >
                    <Loader size={16} />
                    <span>{archived_todo_status}</span>
                  </div>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full ${priorityColors[archived_todo_priority]}`}
                  >
                    <Clock size={16} />
                    <span>{archived_todo_priority}</span>
                  </div>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                      categoryColors[archived_todo_category.toLowerCase()]
                    }`}
                  >
                    <Tag size={16} />
                    <span>{archived_todo_category}</span>
                  </div>

                  <div className="ml-auto flex items-center justify-center gap-2">
                    <div className="text-gray- cursor-pointer">Retrieve</div>
                    <span>|</span>
                    <div
                      className="text-red-600 cursor-pointer"
                      onClick={() => setDeleteConfirmationId(id)}
                    >
                      Delete Permanently
                    </div>
                  </div>
                </div>
              </div>
              {deleteConfirmationId === id && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
                  ref={confirmDeleteRef}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                      Confirm Deletion
                    </h2>
                    <p className="text-xl text-gray-600 mb-6 text-center">
                      Are you sure you want to permanently delete the task with
                      the title of{" "}
                      <span className="font-semibold">
                        {archived_todo_title}
                      </span>
                      ?
                    </p>
                    <div className="flex justify-end gap-3">
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        onClick={() => {
                          deleteArchivedToDo(id);
                          setDeleteConfirmationId(null);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
                        onClick={() => setDeleteConfirmationId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        )}
    </div>
  );
};

export default ArchiveLeft;

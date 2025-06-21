import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  priorityColors,
  statusColors,
  categoryColors,
} from "../../constants/colors";
import { Clock, Loader, Tag } from "lucide-react";
import { API_URL } from "../../constants/api";

const ArchiveLeft = () => {
  const [archivedToDos, setArchivedToDos] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = user;

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

  useEffect(() => {
    fetchArchivedToDos();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Archived To-Dos</h1>

      {archivedToDos &&
        archivedToDos.map(
          (
            {
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
            <div key={idx} className="w-full flex items-start gap-3">
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

                <div className="flex flex-wrap gap-4 text-sm text-gray-700 items-center pt-2">
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
                      categoryColors[
                        Math.floor(Math.random() * categoryColors.length)
                      ]
                    }`}
                  >
                    <Tag size={16} />
                    <span>{archived_todo_category}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default ArchiveLeft;

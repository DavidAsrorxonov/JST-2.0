import { useState } from "react";
import Dropdown from "./Dropdown";
import axios from "axios";
import NavigationButtons from ".././ui/NavigationButtons";
import { useToDo } from "../../context/todoContext";
import { API_URL } from "../../constants/api";
import { priority, status, category } from "../../constants/todoConstants";
import Toast from "../ui/Toast";
import { authChecker } from "../../lib/utils/authChecker";
import { useUser } from "../../context/userContext";

const ToDoBodyRight = () => {
  const [clickedYes, setClickedYes] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const { id } = JSON.parse(localStorage.getItem("user"));
  const { logout } = useUser();

  const { fetchToDos } = useToDo();

  const payload = {
    todo_title: taskTitle,
    todo_duetime: taskDate + " " + taskTime,
    todo_priority: taskPriority,
    todo_status: taskStatus,
    todo_category: taskCategory,
    is_important: clickedYes,
    user_id: id,
  };

  const handleAddTask = async () => {
    if (!authChecker(logout)) {
      return;
    }

    const token = localStorage.getItem("token");

    if (
      !taskTitle ||
      !taskDate ||
      !taskTime ||
      !taskCategory ||
      !taskPriority ||
      !taskStatus
    ) {
      Toast({
        desciption: "All fields are required",
        color: "danger",
      });
    }

    try {
      const response = await axios.post(`${API_URL}/api/todos`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        Toast({
          desciption: "Task added successfully",
          color: "success",
        });
      }

      await fetchToDos();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const resetFields = () => {
    setTaskTitle("");
    setTaskDate("");
    setTaskTime("");
    setTaskCategory("");
    setTaskPriority("");
    setTaskStatus("");
    setClickedYes(false);
  };

  return (
    <div className="w-full ml-4">
      <NavigationButtons />
      <div className="text-4xl font-bold">Add a task</div>
      <div className="flex justify-center flex-col mt-4 gap-6">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Title of the task"
          className="w-[70%] bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
        />

        <div className="flex gap-4 w-[70%]">
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="bg-[#212121] text-[#e5e5e5] flex-1 p-2 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-300 placeholder:text-white/50"
            placeholder="YYYY-MM-DD"
          />
          <input
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
            type="time"
            className="bg-[#212121] text-[#e5e5e5] flex-1 p-2 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white/40 placeholder:text-white/50 transition duration-300"
            placeholder="HH:MM"
          />
        </div>

        <div className="w-[70%]">
          <Dropdown
            defaultValue={"Priority"}
            options={priority}
            onSelect={(priority) => setTaskPriority(priority)}
          />
        </div>

        <div className="w-[70%]">
          <Dropdown
            defaultValue={"Status"}
            options={status}
            onSelect={(status) => setTaskStatus(status)}
          />
        </div>

        <div className="w-[70%]">
          <Dropdown
            defaultValue={"Category"}
            options={category}
            onSelect={(category) => setTaskCategory(category)}
          />
        </div>

        <div className="flex justify-between items-center w-[70%]">
          <div className="">Is important</div>
          <div className="flex gap-2">
            <div
              className={`${
                clickedYes
                  ? "bg-[#e5e5e5] text-[#0a0a0a]"
                  : "border border-gray-400"
              } px-4 py-1 rounded-lg cursor-pointer`}
              onClick={() => setClickedYes(true)}
            >
              Yes
            </div>
            <div
              className={`${
                !clickedYes
                  ? "bg-[#e5e5e5] text-[#0a0a0a]"
                  : "border border-gray-400"
              } px-4 py-1 rounded-lg cursor-pointer`}
              onClick={() => setClickedYes(false)}
            >
              No
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-[70%] p-2 bg-[#171717] text-[#e5e5e5] rounded-lg border border-white/30"
          onClick={() => {
            handleAddTask();
            resetFields();
          }}
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default ToDoBodyRight;

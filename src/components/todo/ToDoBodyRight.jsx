import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { addToast } from "@heroui/toast";
import axios from "axios";
import NavigationButtons from ".././ui/NavigationButtons";
import { useToDo } from "../../context/todoContext";
import { API_URL } from "../../constants/api";

const ToDoBodyRight = () => {
  const [clickedYes, setClickedYes] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const { id } = JSON.parse(localStorage.getItem("user"));

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

  const priority = ["Low", "Medium", "High"];
  const status = ["Not started", "In progress", "Completed"];

  const handleAddTask = async () => {
    if (
      !taskTitle ||
      !taskDate ||
      !taskTime ||
      !taskCategory ||
      !taskPriority ||
      !taskStatus
    ) {
      addToast({
        description: "All fields are required",
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
    }

    try {
      const response = await axios.post(`${API_URL}/api/todos`, payload);

      if (response.status === 201) {
        addToast({
          description: "Task added successfully",
          color: "success",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
        });
      }

      await fetchToDos();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="w-full m-4">
      <NavigationButtons />
      <div className="text-5xl font-bold">Add a task</div>
      <div className="flex justify-center flex-col mt-4 gap-10">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Title of the task"
          className="w-[70%] p-3 outline-none border-1 border-gray-400 rounded-lg shadow-inner focus:ring-1 focus:ring-blue-500 transition duration-300"
        />

        <div className="flex gap-4 w-[70%]">
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="YYYY-MM-DD"
          />
          <input
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
            type="time"
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
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

        <input
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
          type="text"
          placeholder="Category... e.g. Work, Personal, Home"
          className="w-[70%] p-3 outline-none border-1 border-gray-400 rounded-lg shadow-inner focus:ring-1 focus:ring-blue-500 transition duration-300"
        />

        <div className="flex justify-between items-center w-[70%]">
          <div className="">Is important</div>
          <div className="flex gap-2">
            <div
              className={`${
                clickedYes
                  ? "bg-blue-100 text-blue-600 border border-blue-500"
                  : "border border-gray-400"
              } px-4 py-1 rounded-lg cursor-pointer`}
              onClick={() => setClickedYes(true)}
            >
              Yes
            </div>
            <div
              className={`${
                !clickedYes
                  ? "bg-blue-100 text-blue-600 border border-blue-500"
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
          className="w-[70%] p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleAddTask}
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default ToDoBodyRight;

import React from "react";
import Dropdown from "./Dropdown";

const ToDoBodyRight = () => {
  const priority = ["Low", "Medium", "High"];
  const status = ["Not started", "In progress", "Completed"];

  return (
    <div className="w-full m-4">
      <div className="text-5xl font-bold">Add a task</div>
      <div className="flex justify-center flex-col mt-4 gap-10">
        <input
          type="text"
          placeholder="Title of the task"
          className="w-[70%] p-3 outline-none border-1 border-gray-400 rounded-lg shadow-inner focus:ring-1 focus:ring-blue-500 transition duration-300"
        />

        <input
          type="date"
          placeholder="Due time"
          className="w-[70%] p-3 outline-none border-1 border-gray-400 rounded-lg shadow-inner focus:ring-1 focus:ring-blue-500 transition duration-300"
        />

        <div className="w-[70%]">
          <Dropdown defaultValue={"Priority"} options={priority} />
        </div>

        <div className="w-[70%]">
          <Dropdown defaultValue={"Status"} options={status} />
        </div>

        <input
          type="text"
          placeholder="Category... e.g. Work, Personal, Home"
          className="w-[70%] p-3 outline-none border-1 border-gray-400 rounded-lg shadow-inner focus:ring-1 focus:ring-blue-500 transition duration-300"
        />

        <div className="flex justify-between items-center w-[70%]">
          <div className="">Is important</div>
          <div className="flex gap-2">
            <div className="px-4 py-1 border border-gray-400 rounded-lg cursor-pointer">
              Yes
            </div>
            <div className="px-4 py-1 border border-gray-400 rounded-lg cursor-pointer">
              No
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-[70%] p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default ToDoBodyRight;

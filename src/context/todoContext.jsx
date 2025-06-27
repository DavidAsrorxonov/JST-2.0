import { createContext, useState, useContext } from "react";
import axios from "axios";
import { addToast } from "@heroui/toast";
import { API_URL } from "../constants/api";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchToDos = async () => {
    const user = localStorage.getItem("user");
    const { id } = JSON.parse(user);

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

    const response = await axios.get(`${API_URL}/api/todos`, {
      params: {
        user_id: id,
      },
    });

    setTodos(response.data);
  };

  return (
    <ToDoContext.Provider value={{ todos, setTodos, fetchToDos }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDo = () => useContext(ToDoContext);

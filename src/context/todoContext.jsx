import { createContext, useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "../constants/api";
import Toast from "../components/ui/Toast";
import { authChecker } from "../lib/utils/authChecker";
import { useUser } from "./userContext";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const { logout } = useUser();

  const fetchToDos = async () => {
    if (!authChecker(logout)) {
      return;
    }

    const user = localStorage.getItem("user");
    const { id } = JSON.parse(user);

    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/api/todos`, {
      params: {
        user_id: id,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

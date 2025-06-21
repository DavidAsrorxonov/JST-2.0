import { createContext, useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "../constants/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${API_URL}/auth/login`, payload);

      const userData = response.data.user;
      setUser(userData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(userData));

      return { success: true, user: userData };
    } catch (error) {
      return {
        success: false,
        status: error.response?.status,
        message: error.response?.data.message || "Login failed",
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

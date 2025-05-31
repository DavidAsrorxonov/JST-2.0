import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/userContext.jsx";
import { JobProvider } from "./context/jobContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <JobProvider>
        <App />
      </JobProvider>
    </UserProvider>
  </StrictMode>
);

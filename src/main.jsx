import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/userContext.jsx";
import { JobProvider } from "./context/jobContext.jsx";
import { SearchProvider } from "./context/searchContext.jsx";
import { EventProvider } from "./context/eventContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <JobProvider>
        <SearchProvider>
          <EventProvider>
            <App />
          </EventProvider>
        </SearchProvider>
      </JobProvider>
    </UserProvider>
  </StrictMode>
);

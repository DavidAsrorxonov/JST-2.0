import NotFound from "./components/NotFound";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";
import AuthPage from "./pages/AuthPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import CompaniesPage from "./pages/CompaniesPage";
import EventsPage from "./pages/EventsPage";
import SupportPage from "./pages/SupportPage";
import NewsPage from "./pages/NewsPage";
import ApplicationPage from "./pages/ProgressPage";
import { useEffect } from "react";
import { handleShortcut } from "./lib/commands/ShortcutCommands";
import ToDoPage from "./pages/ToDoPage";
import ArchivePage from "./pages/ArchivePage";

const App = () => {
  useEffect(() => {
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <HeroUIProvider>
      <ToastProvider placement="top-center" toastProps={{ radius: "full" }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/progress" element={<ApplicationPage />} />
          <Route path="/todos" element={<ToDoPage />} />
          <Route path="/archive" element={<ArchivePage />} />
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  );
};

export default App;

import NotFound from "./components/NotFound";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";

const App = () => {
  return (
    <HeroUIProvider>
      <ToastProvider />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  );
};

export default App;

import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Auth from "../pages/Auth";
function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
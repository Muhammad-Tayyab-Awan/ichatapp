import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import NotFound from "../pages/NotFound";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
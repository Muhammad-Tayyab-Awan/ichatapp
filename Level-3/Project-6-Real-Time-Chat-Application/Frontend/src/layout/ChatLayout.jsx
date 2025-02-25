import { Toaster } from "react-hot-toast";
import ChatHeader from "../components/ChatHeader";

/* eslint-disable react/prop-types */
function ChatLayout({ children }) {
  return (
    <div className="mx-auto h-full w-full max-w-[1536px] bg-white">
      <Toaster />
      <ChatHeader />
      <div className="min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-3.5rem)]">
        {children}
      </div>
    </div>
  );
}

export default ChatLayout;

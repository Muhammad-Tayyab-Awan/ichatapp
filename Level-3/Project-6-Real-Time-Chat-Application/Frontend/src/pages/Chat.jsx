import ChatDisplay from "../components/ChatDisplay";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import { ChatHeaderProvider } from "../context/ChatHeaderContext";
import { SidebarProvider } from "../context/SidebarContext";
import ChatLayout from "../layout/ChatLayout";

function Chat() {
  return (
    <ChatHeaderProvider>
      <SidebarProvider>
        <ChatLayout>
          <div className="relative flex h-[calc(100vh-3.5rem)]">
            <Sidebar />
            <ChatDisplay />
            <SearchBar />
          </div>
        </ChatLayout>
      </SidebarProvider>
    </ChatHeaderProvider>
  );
}

export default Chat;

import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../context/SidebarContext";
import ChatLayout from "../layout/ChatLayout";

function Chat() {
  return (
    <SidebarProvider>
      <ChatLayout>
        <div className="flex h-[calc(100vh-3.5rem)]">
          <Sidebar />
        </div>
      </ChatLayout>
    </SidebarProvider>
  );
}

export default Chat;

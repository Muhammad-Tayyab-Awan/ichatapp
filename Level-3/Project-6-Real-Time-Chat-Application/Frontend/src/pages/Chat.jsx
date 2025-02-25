import Sidebar from "../components/Sidebar";
import ChatLayout from "../layout/ChatLayout";

function Chat() {
  return (
    <ChatLayout>
      <div className="flex h-[calc(100vh-3.5rem)]">
        <Sidebar />
      </div>
    </ChatLayout>
  );
}

export default Chat;

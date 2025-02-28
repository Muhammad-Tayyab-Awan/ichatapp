import ChatMessages from "./ChatMessages";
import ChattingHeader from "./ChattingHeader";

function ChatDisplay() {
  return (
    <div className="w-[calc(100%-24rem)] overflow-auto overflow-x-hidden bg-amber-400">
      <ChattingHeader />
      <ChatMessages />
    </div>
  );
}

export default ChatDisplay;

import ChattingHeader from "./ChattingHeader";

function ChatDisplay() {
  return (
    <div className="w-[calc(100%-24rem)] overflow-auto overflow-x-hidden bg-green-100">
      <ChattingHeader />
    </div>
  );
}

export default ChatDisplay;

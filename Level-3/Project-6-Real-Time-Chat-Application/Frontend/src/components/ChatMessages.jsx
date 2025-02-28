import { useChatHeaderContext } from "../context/ChatHeaderContext";
import DefaultMsgBox from "./DefaultMsgBox";
import RoomChatMsgs from "./RoomChatMsgs";
import UserChatMsgs from "./UserChatMsgs";

function ChatMessages() {
  const { layout } = useChatHeaderContext();
  return (
    <div className="h-full min-h-[100%] w-full">
      {(layout === "default" && <DefaultMsgBox />) ||
        (layout === "room" && <RoomChatMsgs />) ||
        (layout === "chat" && <UserChatMsgs />)}
    </div>
  );
}

export default ChatMessages;

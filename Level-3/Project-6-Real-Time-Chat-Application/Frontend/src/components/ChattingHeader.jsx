import { useChatHeaderContext } from "../context/ChatHeaderContext";
import RoomChatHeader from "./RoomChatHeader";
import UserChatHeader from "./UserChatHeader";

function ChattingHeader() {
  const { layout } = useChatHeaderContext();
  return (
    (layout === "default" && <></>) ||
    (layout === "chat" && <UserChatHeader />) ||
    (layout === "room" && <RoomChatHeader />)
  );
}

export default ChattingHeader;

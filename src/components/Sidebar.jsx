import { useSidebarContext } from "../context/SidebarContext";
import { UserModalProvider } from "../context/UserModalContext";
import Friends from "./Friends";
import OnlineFriends from "./OnlineFriends";
import RoomChatUsers from "./RoomChatUsers";
import UserProfile from "./UserProfile";
import YourChats from "./YourChats";
import YourProfile from "./YourProfile";
import UserModal from "./UserModal";

function Sidebar() {
  const { layout } = useSidebarContext();
  return (
    <UserModalProvider>
      <UserModal />
      <div className="w-96 overflow-auto overflow-x-hidden bg-green-200 p-2">
        {(layout === "chats" && <YourChats />) ||
          (layout === "friends" && <Friends />) ||
          (layout === "onlineFriends" && <OnlineFriends />) ||
          (layout === "yourProfile" && <YourProfile />) ||
          (layout === "roomChat" && <RoomChatUsers />) ||
          (layout === "userProfile" && <UserProfile />)}
      </div>
    </UserModalProvider>
  );
}

export default Sidebar;

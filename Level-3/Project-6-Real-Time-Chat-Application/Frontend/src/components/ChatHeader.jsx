import { Link } from "react-router";
import { useSidebarContext } from "../context/SidebarContext";

function ChatHeader() {
  const { setLayout } = useSidebarContext();
  return (
    <header className="sticky top-0 z-50 flex h-20 w-full flex-col items-center justify-evenly bg-green-400 sm:h-14 sm:flex-row sm:justify-between sm:px-2">
      <Link to="/" className="flex items-center justify-center gap-1 sm:gap-2">
        <img src="/icon.svg" className="h-8 w-8 sm:h-10 sm:w-10" />
        <p className="text-xl font-medium text-orange-600 sm:text-2xl">
          Chat Room
        </p>
      </Link>
      <div className="bg-white py-1 text-xs sm:bg-transparent sm:py-0 sm:text-sm sm:font-medium">
        <button
          className="mx-1 cursor-pointer bg-purple-400 p-1 focus-visible:outline-hidden sm:rounded-sm sm:bg-white sm:p-2"
          onClick={() => {
            setLayout("chats");
          }}
        >
          Chats
        </button>
        <button
          className="mx-1 cursor-pointer bg-purple-400 p-1 focus-visible:outline-hidden sm:rounded-sm sm:bg-white sm:p-2"
          onClick={() => {
            setLayout("onlineFriends");
          }}
        >
          Online Friends
        </button>
        <button
          className="mx-1 cursor-pointer bg-purple-400 p-1 focus-visible:outline-hidden sm:rounded-sm sm:bg-white sm:p-2"
          onClick={() => {
            setLayout("friends");
          }}
        >
          Friends
        </button>
        <button
          className="mx-1 cursor-pointer bg-purple-400 p-1 focus-visible:outline-hidden sm:rounded-sm sm:bg-white sm:p-2"
          onClick={() => {
            setLayout("yourProfile");
          }}
        >
          Profile
        </button>
        <button
          className="mx-1 cursor-pointer bg-purple-400 p-1 focus-visible:outline-hidden sm:rounded-sm sm:bg-white sm:p-2"
          onClick={() => {
            setLayout("roomChat");
          }}
        >
          Room Chat
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;

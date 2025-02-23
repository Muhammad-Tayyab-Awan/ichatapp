import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex h-14 w-full items-center justify-between bg-green-400 px-2 sm:px-4">
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <img src="/icon.svg" alt="chat-icon" className="h-10 w-10" />
        <p className="text-xl font-medium text-orange-600 sm:text-2xl">
          Chat Room
        </p>
      </div>
      <div className="flex items-center justify-around gap-3 text-orange-600 sm:gap-6">
        <Link
          to="/"
          className="rounded-full bg-gray-100 px-1.5 py-1 font-medium transition-all duration-300 ease-in-out hover:bg-gray-300 sm:px-3 sm:py-2"
        >
          Home
        </Link>
        <Link
          to="/chat"
          className="rounded-full bg-gray-100 px-1.5 py-1 font-medium transition-all duration-300 ease-in-out hover:bg-gray-300 sm:px-3 sm:py-2"
        >
          Chat
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

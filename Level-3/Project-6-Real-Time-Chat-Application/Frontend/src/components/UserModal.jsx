import { useUserModalContext } from "../context/UserModalContext";

function UserModal() {
  const { open, username, setOpen, setUsername } = useUserModalContext();
  return (
    <div
      className={`${open ? "flex" : "hidden"} fixed top-0 left-0 z-50 h-full w-full items-start justify-center backdrop-blur-[2px]`}
    >
      <div className="relative mt-20 h-auto w-96 rounded-sm bg-green-200 p-4 ring">
        <h2 className="text-center text-xl font-medium">Take Action</h2>
        <div className="my-1.5 flex items-center justify-between">
          <p className="text-sm font-medium">
            Block <strong>{username}</strong>
          </p>
          <button className="cursor-pointer rounded-full bg-red-700 p-1.5 text-xs font-medium text-white transition duration-300 ease-in-out hover:bg-red-600 focus-visible:outline-hidden">
            Block Now
          </button>
        </div>
        <div className="my-1.5 flex items-center justify-between">
          <p className="text-sm font-medium">
            Report <strong>{username}</strong>
          </p>
          <button className="cursor-pointer rounded-full bg-red-700 p-1.5 text-xs font-medium text-white transition duration-300 ease-in-out hover:bg-red-600 focus-visible:outline-hidden">
            Report Now
          </button>
        </div>
        <div className="my-1.5 flex items-center justify-between">
          <p className="text-sm font-medium">
            Delete your chat with <strong>{username}</strong>
          </p>
          <button className="cursor-pointer rounded-full bg-red-700 p-1.5 text-xs font-medium text-white transition duration-300 ease-in-out hover:bg-red-600 focus-visible:outline-hidden">
            Delete Now
          </button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="absolute top-[2%] right-[2%] z-50 h-6 w-6 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
          onClick={() => {
            setOpen(false);
            setUsername(null);
          }}
        >
          <path
            fill="#000000"
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </div>
    </div>
  );
}

export default UserModal;

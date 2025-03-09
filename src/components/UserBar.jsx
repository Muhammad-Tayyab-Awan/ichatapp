/* eslint-disable react/prop-types */
import { useUserModalContext } from "../context/UserModalContext";

function UserBar({ username, chatStatus, lastMsg }) {
  const { setOpen, setUsername } = useUserModalContext();
  return (
    <div className="group relative mt-2 flex h-10 w-full items-center justify-start gap-2 rounded-sm bg-white px-2 ring">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h-7 w-7 cursor-pointer rounded-full bg-green-400 p-0.5 ring"
      >
        <path
          fill={`rgb(${Math.floor(Math.random() * 255)},${Math.floor(
            Math.random() * 100,
          )},${Math.floor(Math.random() * 255)})`}
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
        />
      </svg>
      <div className="flex flex-col items-start justify-center overflow-hidden">
        <p className="cursor-pointer text-sm font-medium">{username}</p>
        <p className="text-xs font-normal">
          {chatStatus
            ? lastMsg.length > 35
              ? [...lastMsg].slice(0, 35).join("") + "..."
              : lastMsg
            : `Start conversation with ${username}`}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="absolute top-[10%] right-[2%] z-10 hidden h-4 w-4 cursor-pointer group-hover:block"
        onClick={() => {
          setOpen(true);
          setUsername(username);
        }}
      >
        <path
          fill="#000000"
          d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
        />
      </svg>
    </div>
  );
}

export default UserBar;

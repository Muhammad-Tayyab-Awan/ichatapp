function UserChatHeader() {
  const username = "tayyab34r";
  const status = "online";
  return (
    <div className="sticky top-0 z-30 flex h-12 w-full items-center justify-start gap-2 bg-purple-800 px-3 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h-7 w-7 rounded-full bg-green-400 p-0.5"
      >
        <path
          fill={`rgb(${Math.floor(Math.random() * 255)},${Math.floor(
            Math.random() * 100,
          )},${Math.floor(Math.random() * 255)})`}
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
        />
      </svg>
      <div className="flex flex-col items-start justify-center">
        <p className="text-sm font-medium">{username}</p>
        <p className="text-xs">{status}</p>
      </div>
    </div>
  );
}

export default UserChatHeader;

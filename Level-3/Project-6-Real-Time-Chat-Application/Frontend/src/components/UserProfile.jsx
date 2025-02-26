function UserProfile() {
  const userData = {
    username: "kiyanihassan20",
    fullName: "Hassan Kiyani",
    gender: "male",
    age: 20,
    joinedOn: "20/02/2025",
  };
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="mx-auto h-10 w-10 rounded-full bg-green-400 p-0.5 ring"
      >
        <path
          fill={`rgb(${Math.floor(Math.random() * 255)},${Math.floor(
            Math.random() * 100,
          )},${Math.floor(Math.random() * 255)})`}
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
        />
      </svg>
      <h2 className="mt-2 text-center text-lg font-medium">
        {userData.fullName}
      </h2>
      <div className="mx-auto w-[80%]">
        <p className="mt-3 text-sm">
          Username: <span className="font-medium">{userData.username}</span>
        </p>
        <p className="mt-3 flex items-center gap-1 text-sm">
          Gender:
          {userData.gender === "male" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-6 w-6"
            >
              <path d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8l112 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80s0 0 0 0s0 0 0 0s0 0 0 0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-6 w-6"
            >
              <path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9z" />
            </svg>
          )}
        </p>
        <p className="mt-3 flex items-center gap-2 text-sm">
          Age:
          <span className="rounded-xs font-medium">{userData.age}</span>
        </p>
        <p className="mt-3 flex items-center gap-2 text-sm">
          Joined On:
          <span className="rounded-xs bg-gray-200 p-0.5 font-medium ring">
            {userData.joinedOn}
          </span>
        </p>
        <div className="mt-2">
          <h1 className="text-center text-lg font-medium">Take Action</h1>
          <div className="mt-2 flex w-full items-center justify-center gap-2 px-3 text-xs font-medium">
            <button className="cursor-pointer rounded-full bg-red-700 p-1.5 text-white focus-visible:outline-hidden">
              Delete Chat
            </button>
            <button className="cursor-pointer rounded-full bg-red-700 p-1.5 text-white focus-visible:outline-hidden">
              Unfriend
            </button>
            <button className="cursor-pointer rounded-full bg-red-700 p-1.5 text-white focus-visible:outline-hidden">
              Block
            </button>
            <button className="cursor-pointer rounded-full bg-red-700 p-1.5 text-white focus-visible:outline-hidden">
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

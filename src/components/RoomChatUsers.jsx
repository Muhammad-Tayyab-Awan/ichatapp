import UserBar from "./UserBar";

function RoomChatUsers() {
  const roomUsers = [
    { username: "tayyab", chatStatus: false },
    { username: "raza", chatStatus: false },
  ];
  return (
    <div>
      <h1 className="text-center font-medium">Users in Room</h1>
      {roomUsers.length > 0 ? (
        roomUsers.map((user) => {
          return (
            <UserBar
              key={user.username}
              username={user.username}
              chatStatus={user.chatStatus}
            />
          );
        })
      ) : (
        <p className="my-3 text-center text-red-500">
          No users are in the room now
        </p>
      )}
    </div>
  );
}

export default RoomChatUsers;

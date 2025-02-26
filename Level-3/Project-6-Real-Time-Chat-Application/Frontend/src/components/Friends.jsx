import UserBar from "./UserBar";

function Friends() {
  const friendList = [
    { username: "hamza07", chatStatus: false, lastMsg: null },
  ];
  return (
    <div>
      <h1 className="text-center font-medium">Your Friends</h1>
      {friendList.length > 0 ? (
        friendList.map((friend) => {
          return (
            <UserBar
              key={friend.username}
              username={friend.username}
              chatStatus={friend.chatStatus}
              lastMsg={friend.lastMsg}
            />
          );
        })
      ) : (
        <p className="my-3 text-center text-red-500">You have no friends yet</p>
      )}
    </div>
  );
}

export default Friends;

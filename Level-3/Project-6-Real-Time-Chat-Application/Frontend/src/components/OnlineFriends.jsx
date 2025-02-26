import UserBar from "./UserBar";

function OnlineFriends() {
  const friendsOnline = [
    { username: "haiderworld", chatStatus: false, lastMsg: "none" },
  ];
  return (
    <div>
      <h1 className="text-center font-medium">Online Friends</h1>
      {friendsOnline.length > 0 ? (
        friendsOnline.map((friend) => {
          return (
            <UserBar
              key={friend.username}
              username={friend.username}
              chatStatus={friend.chatStatus}
            />
          );
        })
      ) : (
        <p className="my-3 text-center text-red-500">
          None of your friend is online
        </p>
      )}
    </div>
  );
}

export default OnlineFriends;

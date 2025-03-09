import UserBar from "./UserBar";
function YourChats() {
  const userChats = [
    { username: "tayyabraza1918", lastMsg: "Hi! this is me Tayyab Raza Awan" },
    { username: "muneebattari34", lastMsg: "Hi! this is me Muneeb" },
    { username: "kiyani47", lastMsg: "Hi! this is me Hassan" },
  ];
  return (
    <div>
      <h1 className="text-center font-medium">Your Chats</h1>
      {userChats.length > 0 ? (
        userChats.map((userChat) => {
          return (
            <UserBar
              key={userChat.username}
              username={userChat.username}
              chatStatus={true}
              lastMsg={userChat.lastMsg}
            />
          );
        })
      ) : (
        <p className="my-3 text-center text-sm text-red-600">
          Sorry! you have no chat with any friend
        </p>
      )}
    </div>
  );
}

export default YourChats;

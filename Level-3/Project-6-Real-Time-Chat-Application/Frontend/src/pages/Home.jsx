import SimpleLayout from "../layout/SimpleLayout";

function Home() {
  return (
    <SimpleLayout>
      <div className="my-2 flex w-full flex-col items-center justify-around sm:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 sm:w-1/2 sm:gap-5">
          <h1 className="text-lg font-medium text-amber-600 sm:text-2xl">
            Real time Chat Application
          </h1>
          <p className="w-[80%] text-justify text-sm leading-relaxed selection:bg-black selection:text-white sm:text-base sm:leading-loose">
            Chat in real time with our simple, web-based text messaging app! No
            downloads, no hassle just instant, secure communication. Stay
            connected with fast, reliable messaging, perfect for teams, friends,
            and businesses. Start chatting now and experience effortless,
            real-time text communication anytime, anywhere!
          </p>
        </div>
        <img src="/chat-photo.jpg" alt="chat-photo" className="h-48 sm:h-96" />
      </div>
    </SimpleLayout>
  );
}

export default Home;

import { Link } from "react-router";
import FeatureAccordion from "../components/FeatureAccordian";
import SimpleLayout from "../layout/SimpleLayout";

function Home() {
  return (
    <SimpleLayout>
      <div className="my-2 flex w-full flex-col items-center justify-around md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 md:w-1/2 md:gap-5">
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
        <img
          src="/images/chat-photo.jpg"
          alt="chat-photo"
          className="h-48 sm:h-96"
        />
      </div>
      <div className="my-2 h-auto w-full">
        <h2 className="text-center text-base font-medium sm:text-xl">
          Features
        </h2>
        <div className="my-2 h-auto">
          <FeatureAccordion />
        </div>
      </div>
      <div className="mx-auto my-2 flex h-60 w-full flex-col items-center justify-center gap-3">
        <h1 className="text-xl sm:text-2xl">Lets discover new friends</h1>
        <Link
          className="rounded-full bg-purple-400 p-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 sm:p-3 sm:text-base"
          to="/chat"
        >
          Join Now
        </Link>
      </div>
    </SimpleLayout>
  );
}

export default Home;

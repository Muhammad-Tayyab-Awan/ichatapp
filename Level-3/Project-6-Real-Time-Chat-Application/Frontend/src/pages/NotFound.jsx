import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-start bg-gray-200">
      <div className="mt-20 font-serif text-4xl text-red-700">404</div>
      <div className="mt-2 font-sans text-lg font-medium">Page Not Found</div>
      <div className="mt-2 px-2 text-center font-sans text-sm font-medium sm:px-0">
        The page you are looking for is not available yet
      </div>
      <Link
        to="/"
        className="my-4 rounded-lg bg-black px-2 py-2 text-xs font-medium text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;

import { Link } from "react-router";

function Footer() {
  return (
    <footer className="flex h-14 w-full flex-col items-center justify-around bg-green-400">
      <div className="flex w-full items-center justify-between px-4">
        <div className="flex items-center justify-center gap-2">
          <img src="/icon.svg" alt="logo" className="h-6 w-6" />
          <p className="text-base font-medium text-orange-600 sm:text-lg">
            Chat Room
          </p>
        </div>
        <div className="flex gap-4 text-sm sm:text-base">
          <Link
            className="transition-all duration-300 ease-in-out hover:underline"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="transition-all duration-300 ease-in-out hover:underline"
            to="/about-us"
          >
            About Us
          </Link>
        </div>
      </div>
      <p className="w-full text-center text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} | Chat Room | All rights reserved
      </p>
    </footer>
  );
}

export default Footer;

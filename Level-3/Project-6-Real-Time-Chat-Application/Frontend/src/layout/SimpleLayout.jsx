/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";

function SimpleLayout({ children }) {
  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <div className="min-h-[calc(100vh-3.5rem)]">{children}</div>
    </div>
  );
}

export default SimpleLayout;

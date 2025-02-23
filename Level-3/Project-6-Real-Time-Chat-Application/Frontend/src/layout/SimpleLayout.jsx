/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";

function SimpleLayout({ children }) {
  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </div>
  );
}

export default SimpleLayout;

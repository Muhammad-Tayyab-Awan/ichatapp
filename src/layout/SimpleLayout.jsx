/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function SimpleLayout({ children }) {
  return (
    <div className="mx-auto h-full w-full max-w-[1536px] bg-white">
      <Navbar />
      <div className="min-h-[calc(100vh-7rem)]">{children}</div>
      <Footer />
    </div>
  );
}

export default SimpleLayout;

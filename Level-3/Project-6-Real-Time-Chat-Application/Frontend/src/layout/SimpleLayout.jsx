/* eslint-disable react/prop-types */
function SimpleLayout({ children }) {
  return (
    <div className="w-full bg-slate-950">
      <div className="absolute top-[-10%] right-0 bottom-0 left-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="min-h-screen text-amber-400">{children}</div>
      <div className="absolute top-[-10%] bottom-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
    </div>
  );
}

export default SimpleLayout;

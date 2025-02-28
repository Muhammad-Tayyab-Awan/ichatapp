import { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

function Auth() {
  const [form, setForm] = useState("register");
  return (
    <div className="flex h-screen w-full items-center justify-center bg-amber-500">
      {form === "register" ? (
        <Register setForm={setForm} />
      ) : (
        <Login setForm={setForm} />
      )}
    </div>
  );
}

export default Auth;

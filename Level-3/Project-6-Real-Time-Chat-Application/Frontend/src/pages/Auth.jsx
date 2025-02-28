import { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import OTPVerification from "../components/OTPVerification";

function Auth() {
  const [form, setForm] = useState("register");
  return (
    <div className="flex h-screen w-full items-center justify-center bg-amber-500">
      {(form === "register" && <Register setForm={setForm} />) ||
        (form === "login" && <Login setForm={setForm} />) ||
        (form === "otp" && <OTPVerification />)}
    </div>
  );
}

export default Auth;

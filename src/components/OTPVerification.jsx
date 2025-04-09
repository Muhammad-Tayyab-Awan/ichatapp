import { useForm } from "react-hook-form";
import authAPI from "../api/authAPI";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function OTPVerification() {
  useEffect(() => {
    document.title = "OTP Verification - IChatapp";
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm();
  const navigator = useNavigate();
  const changeFocus = (e) => {
    if (e.target.validity.valid) {
      const nextSibling = e.target.nextElementSibling;
      nextSibling && nextSibling.focus();
      !nextSibling && setValue("6", e.target.value);
      !nextSibling &&
        e.target.parentElement.parentElement.lastElementChild.click();
    }
  };
  const submitForm = async (data) => {
    const otp = Object.values(data).toString().replaceAll(",", "");
    const response = await authAPI.otpVerification(otp);
    reset();
    if (response.success) {
      navigator("/chat");
    }
  };
  const pasteHandler = async (e) => {
    e.preventDefault();
    let text = await window.navigator.clipboard.readText();
    for (let i = 0; i < 6; i++) setValue(`${i + 1}`, text[i]);
    e.target.parentElement.parentElement.checkValidity() &&
      e.target.parentElement.parentElement.lastElementChild.click();
  };
  return (
    <form
      method="POST"
      noValidate
      autoComplete="off"
      onReset={(e) => {
        e.target.getElementsByTagName("div")[0].firstElementChild.focus();
      }}
      onSubmit={handleSubmit(submitForm)}
      className="flex h-64 w-96 flex-col items-center justify-center gap-4 rounded-lg bg-gray-100/10 p-2 shadow-lg shadow-black backdrop-blur-xs"
    >
      <h1 className="text-center font-medium">Verify OTP</h1>
      <p className="text-sm">Enter your 6 digit OTP below</p>
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          name="1"
          id="1"
          maxLength="1"
          pattern="\d*"
          onInput={changeFocus}
          onPaste={pasteHandler}
          {...register("1", { required: true, pattern: /^[0-9]/ })}
          required
          autoFocus
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black invalid:ring-2 invalid:ring-red-800 focus-visible:outline-hidden"
        />
        <input
          type="text"
          name="2"
          id="2"
          maxLength="1"
          pattern="\d*"
          onInput={changeFocus}
          onPaste={pasteHandler}
          {...register("2", { required: true, pattern: /^[0-9]/ })}
          required
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black invalid:ring-2 invalid:ring-red-800 focus-visible:outline-hidden"
        />
        <input
          type="text"
          name="3"
          id="3"
          maxLength="1"
          pattern="\d*"
          onInput={changeFocus}
          onPaste={pasteHandler}
          {...register("3", { required: true, pattern: /^[0-9]/ })}
          required
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black invalid:ring-2 invalid:ring-red-800 focus-visible:outline-hidden"
        />
        <input
          type="text"
          name="4"
          id="4"
          maxLength="1"
          pattern="\d*"
          onInput={changeFocus}
          onPaste={pasteHandler}
          {...register("4", { required: true, pattern: /^[0-9]/ })}
          required
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black invalid:ring-2 invalid:ring-red-800 focus-visible:outline-hidden"
        />
        <input
          type="text"
          name="5"
          id="5"
          maxLength="1"
          pattern="\d*"
          onInput={changeFocus}
          onPaste={pasteHandler}
          {...register("5", { required: true, pattern: /^[0-9]/ })}
          required
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black invalid:ring-2 invalid:ring-red-800 focus-visible:outline-hidden"
        />
        <input
          type="text"
          name="6"
          id="6"
          maxLength="1"
          pattern="\d*"
          onInput={changeFocus}
          onPaste={pasteHandler}
          {...register("6", { required: true, pattern: /^[0-9]/ })}
          required
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black invalid:ring-2 invalid:ring-red-800 focus-visible:outline-hidden"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`cursor-pointer rounded-sm bg-white px-1.5 py-1 text-sm font-medium shadow-sm shadow-black focus-visible:outline-hidden ${isSubmitting && "animate-pulse"}`}
      >
        {isSubmitting ? "Verifying..." : "Verify"}
      </button>
    </form>
  );
}

export default OTPVerification;

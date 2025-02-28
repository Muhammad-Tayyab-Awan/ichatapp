function OTPVerification() {
  return (
    <form
      action="POST"
      className="flex h-64 w-96 flex-col items-center justify-center gap-4 rounded-lg bg-gray-100/10 p-2 shadow-lg shadow-black backdrop-blur-xs"
    >
      <h1 className="text-center font-medium">Verify OTP</h1>
      <p className="text-sm">Enter your 6 digit OTP below</p>
      <div className="flex items-center justify-center gap-2">
        <input
          type="number"
          name=""
          id=""
          min={1}
          max={9}
          maxLength="1"
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black focus-visible:outline-hidden"
        />
        <input
          type="number"
          name=""
          id=""
          min={1}
          max={9}
          maxLength="1"
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black focus-visible:outline-hidden"
        />
        <input
          type="number"
          name=""
          id=""
          min={1}
          max={9}
          maxLength="1"
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black focus-visible:outline-hidden"
        />
        <input
          type="number"
          name=""
          id=""
          min={1}
          max={9}
          maxLength="1"
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black focus-visible:outline-hidden"
        />
        <input
          type="number"
          name=""
          id=""
          min={1}
          max={9}
          maxLength="1"
          className="h-10 w-10 rounded-md bg-white p-2 text-center shadow-sm shadow-black focus-visible:outline-hidden"
        />
        <input
          type="number"
          name=""
          id=""
          min={1}
          max={9}
          maxLength="1"
          className="h-10 w-10 rounded-md bg-white text-center shadow-sm shadow-black focus-visible:outline-hidden"
        />
      </div>
      <input
        type="submit"
        value="Verify"
        className="cursor-pointer rounded-sm bg-white px-1.5 py-1 text-sm font-medium shadow-sm shadow-black focus-visible:outline-hidden"
      />
    </form>
  );
}

export default OTPVerification;

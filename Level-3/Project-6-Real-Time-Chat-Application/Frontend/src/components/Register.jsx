/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

function Register({ setForm }) {
  const { register } = useForm({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
      birthdate: "",
    },
  });
  return (
    <form
      className="flex h-96 w-96 flex-col items-center justify-center gap-4 rounded-lg bg-gray-100/10 p-2 shadow-lg shadow-black backdrop-blur-xs"
      noValidate
      autoComplete="off"
      method="POST"
    >
      <h1 className="text-center font-medium">
        Register Now
        <p className="text-xs font-normal">
          Already have an account?
          <button
            className="mx-1 cursor-pointer text-xs font-medium text-black focus-visible:outline-hidden"
            onClick={() => {
              setForm("login");
            }}
          >
            Login
          </button>
        </p>
      </h1>
      <div className="flex w-full items-center justify-center">
        <input
          type="text"
          name="firstName"
          id="firstName"
          {...register("firstName", { required: true })}
          autoComplete="off"
          placeholder="First name here"
          className="w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden"
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <input
          type="text"
          name="lastName"
          id="lastName"
          {...register("lastName", { required: true })}
          autoComplete="off"
          placeholder="Last name here"
          className="w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden"
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <input
          type="text"
          name="username"
          id="username"
          {...register("username", { required: true })}
          autoComplete="off"
          placeholder="Username here"
          className="w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <input
          type="email"
          name="email"
          id="email"
          {...register("email", { required: true })}
          autoComplete="off"
          placeholder="Email here"
          className="w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", { required: true })}
          autoComplete="off"
          placeholder="Password here"
          className="w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center text-xs">
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          {...register("birthdate", { required: true })}
          autoComplete="off"
          className="w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden"
        />
      </div>
      <div className="flex w-full items-center justify-center gap-3 text-xs">
        <span className="font-medium">Gender :</span>
        <input type="radio" name="gender" id="male" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="cursor-pointer rounded-sm bg-white p-1 text-xs font-medium text-black shadow-sm shadow-black focus-visible:outline-hidden"
        />
      </div>
    </form>
  );
}

export default Register;

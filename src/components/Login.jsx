/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

function Login({ setForm }) {
  const { register } = useForm({
    defaultValues: { email: "", password: "", rememberMe: false },
  });
  return (
    <form
      className="flex h-96 w-96 flex-col items-center justify-center gap-4 rounded-lg bg-gray-100/10 p-2 shadow-lg shadow-black backdrop-blur-xs"
      noValidate
      autoComplete="off"
      method="POST"
    >
      <h1 className="text-center font-medium">
        Sign In
        <p className="text-xs font-normal">
          Does&apos;t have an account?
          <button
            className="mx-1 cursor-pointer text-xs font-medium text-black focus-visible:outline-hidden"
            onClick={() => {
              setForm("register");
            }}
          >
            Create
          </button>
        </p>
      </h1>
      <div className="flex w-full items-center justify-center">
        <input
          type="email"
          name="email"
          id="email"
          {...register("email", { required: true })}
          autoComplete="off"
          placeholder="Username here"
          className="w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden"
        />
      </div>
      <div className="flex w-full items-center justify-center">
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
      <div className="flex w-[75%] items-center justify-start px-3 text-xs">
        <div className="flex items-center justify-center gap-1">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            {...register("rememberMe")}
            className="outline-hidden focus-visible:outline-hidden"
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
      </div>
      <div>
        <input
          type="submit"
          name="submit"
          value="Sign In"
          className="cursor-pointer rounded-sm bg-white p-1 text-xs font-medium text-black shadow-sm shadow-black focus-visible:outline-hidden"
        />
      </div>
    </form>
  );
}

export default Login;

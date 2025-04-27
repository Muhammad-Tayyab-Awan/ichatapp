/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import authAPI from "../api/authAPI";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import toast from "react-hot-toast";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .min(8)
    .pattern(/[a-z].*[a-z].*[a-z]/, "at least 3 lowercase letters")
    .pattern(/[A-Z].*[A-Z]/, "at least 2 uppercase letters")
    .pattern(/\d.*\d/, "at least 2 numbers")
    .pattern(/[^a-zA-Z0-9]/, "at least 1 symbols")
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters long.",
      "string.pattern.name":
        "Password must contain at least 2 uppercase, 3 lowercase, 2 numbers, and 1 symbols.",
    }),
  rememberMe: Joi.boolean().optional(),
});

function Login({ setForm }) {
  useEffect(() => {
    document.title = "Sign In - IChatapp";
  }, []);
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: { email: "", password: "", rememberMe: false },
  });
  const submitForm = async (data) => {
    const response = await authAPI.login(data);
    reset();
    if (response.success === "otp") {
      setForm("otp");
      return;
    }
    if (response.success) {
      navigator("/chat");
      return;
    }
    toast.error(response.error);
  };
  return (
    <form
      className="flex h-96 w-96 flex-col items-center justify-center gap-4 rounded-lg bg-gray-100/10 p-2 shadow-lg shadow-black backdrop-blur-xs"
      noValidate
      autoComplete="off"
      method="POST"
      onSubmit={handleSubmit(submitForm)}
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
          placeholder="Email here"
          autoFocus
          className={`w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden ${errors.email && "ring-2 ring-red-800"}`}
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
          className={`w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden ${errors.password && "ring-2 ring-red-800"}`}
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
        <button
          type="submit"
          disabled={isSubmitting}
          className={`cursor-pointer rounded-sm bg-white p-1 text-xs font-medium text-black shadow-sm shadow-black focus-visible:outline-hidden ${isSubmitting && "animate-pulse"}`}
        >
          {isSubmitting ? "Loading.." : "Sign In"}
        </button>
      </div>
    </form>
  );
}

export default Login;

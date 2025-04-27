/* eslint-disable react/prop-types */
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import authAPI from "../api/authAPI";
import toast from "react-hot-toast";

const schema = Joi.object({
  username: Joi.string()
    .pattern(/^[a-z0-9]{6,15}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Username must consist of 6 to 15 chars (lowercase and numbers only)",
      "string.empty": "Username is required",
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email",
    }),

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

  firstName: Joi.string()
    .pattern(/^[A-Z][a-z]{3,20}$/)
    .required()
    .messages({
      "string.pattern.base":
        "First name must start with an uppercase letter and contain 3 to 20 characters",
      "string.empty": "First name is required",
    }),

  lastName: Joi.string()
    .pattern(/^[A-Z][a-z]{3,30}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Last name must start with an uppercase letter and contain 3 to 30 characters",
      "string.empty": "Last name is required",
    }),

  gender: Joi.string().valid("male", "female").required().messages({
    "any.only": "Gender must be either 'male' or 'female'",
    "string.empty": "Gender is required",
  }),

  birthdate: Joi.date().required().messages({
    "date.empty": "Address is required",
  }),
});

function Register({ setForm }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: joiResolver(schema),
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
  const submitForm = async (data) => {
    const response = await authAPI.register(data);
    reset();
    if (response.success === "otp") {
      setForm("otp");
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
        Register Now
        <p className="text-xs font-normal">
          Already have an account?
          <button
            className="mx-1 cursor-pointer text-xs font-medium text-black focus-visible:outline-hidden"
            onClick={() => {
              setForm("login");
            }}
          >
            Sign In
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
          className={`w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden ${errors.firstName && "ring-2 ring-red-800"}`}
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
          className={`w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden ${errors.lastName && "ring-2 ring-red-800"}`}
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          {...register("username", { required: true })}
          placeholder="Username here"
          className={`w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden ${errors.username && "ring-2 ring-red-800"}`}
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <input
          type="email"
          name="email"
          id="email"
          {...register("email", { required: true })}
          autoComplete="off"
          placeholder="Email here"
          className={`w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden ${errors.email && "ring-2 ring-red-800"}`}
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          {...register("password", { required: true })}
          placeholder="Password here"
          className={`w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden ${errors.password && "ring-2 ring-red-800"}`}
        />
      </div>
      <div className="flex w-full items-center justify-center text-xs">
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          autoComplete="off"
          {...register("birthdate", { required: true, valueAsDate: true })}
          className={`w-[75%] rounded-sm bg-white px-2 py-1 text-center text-xs text-black shadow-sm shadow-black transition-shadow duration-200 ease-in-out placeholder:text-gray-950 focus-visible:shadow-md focus-visible:outline-hidden ${errors.birthdate && "ring-2 ring-red-800"}`}
        />
      </div>
      <div className="flex w-full items-center justify-center gap-3 text-xs">
        <span className="font-medium">Gender :</span>
        <input
          type="radio"
          name="gender"
          {...register("gender")}
          id="male"
          value="male"
          className={errors.gender && "ring-2 ring-red-800"}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          {...register("gender")}
          id="female"
          value="female"
          className={errors.gender && "ring-2 ring-red-800"}
        />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <button
          type="submit"
          name="submit"
          className={`cursor-pointer rounded-sm bg-white p-1 text-xs font-medium text-black shadow-sm shadow-black focus-visible:outline-hidden ${isSubmitting && "animate-pulse"}`}
        >
          {isSubmitting ? "Loading..." : "Register"}
        </button>
      </div>
    </form>
  );
}

export default Register;

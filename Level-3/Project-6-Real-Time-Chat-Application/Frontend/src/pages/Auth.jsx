import { useForm } from "react-hook-form";

function Auth() {
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
    <div className="flex h-screen w-full items-center justify-center bg-amber-500">
      <form
        className="flex h-96 w-96 flex-col items-center justify-center gap-4 rounded-lg bg-gray-100/10 p-2 shadow-lg shadow-black backdrop-blur-xs"
        noValidate
        autoComplete="off"
      >
        <h1 className="font-medium">Register Now</h1>
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
            className="cursor-pointer rounded-sm bg-green-800 p-1 text-xs font-medium text-white focus-visible:outline-hidden"
          />
        </div>
      </form>
    </div>
  );
}

export default Auth;

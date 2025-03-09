import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";

function SearchBar() {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(8).max(15).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: { username: "" },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
      method="POST"
      className={`absolute top-2 right-2 z-40 flex h-8 w-80 items-center justify-between rounded-full bg-purple-500 text-sm text-white ${errors.username && "ring ring-red-600"}`}
    >
      <input
        type="text"
        name="username"
        id="username"
        minLength="8"
        maxLength="15"
        autoComplete="off"
        {...register("username", { required: true })}
        className="w-full border-none bg-transparent p-3 text-center placeholder:text-gray-300 focus-visible:outline-hidden"
        placeholder="Search by username"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="h-full cursor-pointer rounded-r-full bg-green-500 p-1.5 disabled:cursor-progress"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-4 w-4"
        >
          <path
            fill="#000000"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;

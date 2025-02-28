/* eslint-disable react/prop-types */
function Login({ setForm }) {
  return (
    <button
      onClick={() => {
        setForm("register");
      }}
    >
      Register now
    </button>
  );
}

export default Login;

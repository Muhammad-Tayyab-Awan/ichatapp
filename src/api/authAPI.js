const API_URI = import.meta.env.VITE_API_URI;

async function register(credentials) {
  const jsonResponse = await fetch(`${API_URI}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...credentials }),
  });
  const response = await jsonResponse.json();
  return response;
}

async function login(credentials) {
  const jsonResponse = await fetch(`${API_URI}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...credentials }),
  });
  const response = await jsonResponse.json();
  return response;
}

async function otpVerification(otp) {
  const jsonResponse = await fetch(`${API_URI}/auth/verify/${otp}`, {
    method: "GET",
    credentials: "include",
  });
  const response = await jsonResponse.json();
  return response;
}

async function loginStatus() {
  const jsonResponse = await fetch(`${API_URI}/auth/login-status`, {
    method: "GET",
    credentials: "include",
  });
  const response = await jsonResponse.json();
  return response;
}

const authAPI = {
  login,
  otpVerification,
  register,
  loginStatus,
};

export default authAPI;

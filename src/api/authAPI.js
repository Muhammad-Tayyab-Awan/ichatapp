const API_URI = import.meta.env.VITE_API_URI;

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
const authAPI = { login: login };
export default authAPI;

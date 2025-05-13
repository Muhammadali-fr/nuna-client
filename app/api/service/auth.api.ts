import axios from "axios";

const BASE_URL = "https://nuna-core-server.onrender.com"; // ← backend API URL

export const signUp = async (name: string, email: string) => {
  const res = await axios.post(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name }),
  });
  console.log(res.data().token);

};

export const login = async (email: string) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res.json();
};

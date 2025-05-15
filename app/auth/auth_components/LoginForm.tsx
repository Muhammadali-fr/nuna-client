"use-client";
import authService from "@/app/api/services/authService";
import { Loader, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async () => {
    setLoading(true);
    if (formData.email.length === 0) {
      return alert("please check email");
    }

    try {
      const data = {
        email: formData.email,
      };
      const responce = await authService.login(data);
      console.log(responce);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">Log in without password</h1>
      <p className="text-base text-gray-500 mb-8">
        We will send a magic link to your email, just click it.
      </p>

      <form method="POST" className="w-1/2 mb-4">
        <label htmlFor="email" className="block">
          <span className="mb-2 text-gray-500 block">Your email</span>
          <div className="flex items-center bg-gray-800 rounded-md px-4 space-x-4">
            <Mail />
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="mail@example.com"
              required
              className="h-12 w-full bg-transparent outline-none text-white"
            />
          </div>
        </label>
      </form>

      <div className="flex flex-col items-start gap-2 mb-2">
        <div className="flex items-start gap-2">
          <label className="flex items-center">
            <input type="checkbox" className="input" />
            <span className="custom-checkbox"></span>
          </label>
          <p className="text-gray-500 flex items-center gap-1">
            Allow all terms and cool stuff
            <Link href="/terms" className="text-blue-600 underline">
              in Nuna
            </Link>
          </p>
        </div>
        <Link href="/terms" className="text-blue-600 ">
          Do you already have an account?
        </Link>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-[200px] h-[40px] rounded bg-[#0C8CE9] cursor-pointer hover:opacity-80 flex items-center justify-center"
      >
        {loading ? <Loader /> : <span>Receive Link</span>}
      </button>
    </div>
  );
};

export default LoginForm;

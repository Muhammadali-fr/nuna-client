"use-client";
import authService from "@/app/api/services/authService";
import Loader from "@/app/reuseable/Loader";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        email: email,
      };
      const responce = await authService.login(data);
      console.log(responce);
      alert(responce.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="py-5">
      <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
        Login without password
      </h1>
      <p className="text-base text-[#8C8998] mb-8">
        We will send a magic link to your email. Just click it!
      </p>

      <form onSubmit={handleSubmit} className="w-1/2 mb-4 space-y-4">
        <div className="space-y-3">
          <div>
            <label htmlFor="email" className="text-[#8C8998] block mb-1.5">
              your email
            </label>
            <div className="bg-[#1B1B2D] flex items-center rounded-md px-4 space-x-4">
              <Mail />
              <input
                id="email"
                type="email"
                placeholder="mail@example.com"
                className="h-12 w-full bg-transparent outline-none text-white"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center gap-2">
          {/* <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="input" />
            <span className="custom-checkbox" />
          </label> */}
          <p className="text-[#8C8998] flex items-center gap-1 text-sm">
            You can read all terms of{" "}
            <Link href="/terms" className="text-blue-600 underline">
              nuna
            </Link>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-64 py-3 bg-[#0C8CE9] rounded-md text-white"
        >
          {!loading ? "Receive Link" : <Loader />}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

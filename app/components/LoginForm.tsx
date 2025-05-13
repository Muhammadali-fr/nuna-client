"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail } from "lucide-react";

const LoginForm = () => {
  const [isLinkSent, setIsLinkSent] = useState(true);

  const [email, setEmail] = useState('')

  const handelSubmit = () => {
    console.log(email);

  }

  return (
    <div className="py-5">
      {isLinkSent ? (
        <>
          <h1 className="text-4xl font-bold mb-2">Log in without password</h1>
          <p className="text-base text-gray-500 mb-8">
            We will send a magic link to your email, just click it.
          </p>

          <form onSubmit={handelSubmit} method="POST" className="w-1/2 mb-4">
            <label htmlFor="email" className="block">
              <span className="mb-2 text-gray-500 block">Your email</span>
              <div className="flex items-center bg-gray-800 rounded-md px-4 space-x-4">
                <Mail />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
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
            onClick={handelSubmit}
            className="px-16 py-3.5 bg-blue-600 hover:opacity-90 rounded-md"
          >
            Receive Link
          </button>
        </>
      ) : (
        <div className="container">
          <button className="px-16 py-3.5 bg-blue-600 rounded-md">
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
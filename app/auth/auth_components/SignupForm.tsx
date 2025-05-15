"use client";

import Link from "next/link";
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import { Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import authService from "@/app/api/services/authService";

// --- Types ---
type FormData = {
  name: string;
  email: string;
};

type ToastType = "success" | "warn";

// --- Config ---
const TOAST_CONFIG = {
  position: "top-center" as const,
  autoClose: 300,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Slide,
};

const API_URL = "https://nuna-core-server.onrender.com"; // Update with actual endpoint path if needed

const SignupForm = () => {
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // router
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    try {
      const data = {
        name: name,
        email: email,
      };
      const res: any = await authService.register(data);
      if (res.message) {
        router.push(`/auth/success/?email=${email}`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="py-5">
      <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
        Register in easiest way
      </h1>
      <p className="text-base text-[#8C8998] mb-8">
        We will send a magic link to your email. Just click it!
      </p>

      <form onSubmit={handleSubmit} className="w-1/2 mb-4 space-y-6">
        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="text-[#8C8998] block mb-1.5">
              your name
            </label>
            <div className="bg-[#1B1B2D] flex items-center rounded-md px-4 space-x-4">
              <User />
              <input
                id="name"
                type="text"
                placeholder="John doe"
                className="h-12 w-full bg-transparent outline-none text-white"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
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
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="input" />
            <span className="custom-checkbox" />
          </label>
          <p className="text-[#8C8998] flex items-center gap-1 text-sm">
            Allow all terms and cool stuff{" "}
            <Link href="/terms" className="text-blue-600 underline">
              in Nuna
            </Link>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-16 pt-4 pb-3.5 bg-[#0C8CE9] rounded-md text-white"
        >
          Receive Link
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

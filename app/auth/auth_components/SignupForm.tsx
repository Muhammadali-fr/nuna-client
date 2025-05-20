"use client";

import Link from "next/link";
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import { Mail, User } from "lucide-react";
<<<<<<< HEAD
import authService from "@/app/api/services/authService";
=======
import { useRouter } from "next/navigation";
import authService from "@/app/api/services/authService";
import Loader from "@/app/reuseable/Loader";
>>>>>>> f90ea1675fab1c7d4a7ca708b95755f4d234b0f4

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

const API_URL = process.env.VITE_API_BASE_URL // Update with actual endpoint path if needed

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
<<<<<<< HEAD
        name: formData.name,
        email: formData.email,
      };
      const responce = await authService.register(data);
      console.log(responce);
      alert(responce.data.message)
    } catch (err: any) {
      console.error("Signup error:", err);
      showToast("warn", err.response?.data?.message || "Server error");
=======
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
>>>>>>> f90ea1675fab1c7d4a7ca708b95755f4d234b0f4
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

      <form onSubmit={handleSubmit} className="w-1/2 mb-4 space-y-4">
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
          {!loader ? "Receive Link" : <Loader />}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

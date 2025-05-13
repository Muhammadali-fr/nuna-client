"use client";

import Link from "next/link";
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import { Mail, User } from "lucide-react";

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const showToast = (type: "success" | "warn", message: string) => {
    const config = {
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

    toast[type](message, config);
  };

  const handleInputChange = (field: "name" | "email", value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    e.preventDefault();

    const { name, email } = formData;

    if (!name || !email) {
      showToast("warn", "Please fill in all fields!");
      return;
    }

    if (!email.includes("@")) {
      showToast("warn", "Please enter a valid email address.");
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "" });

    showToast("success", "Link sent successfully!");
  };

  return (
    <div className="py-5">
      <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
        Register in easiest way
      </h1>
      <p className="text-base text-[#8C8998] mb-8">
        We will send a magic link to your email. Just click it!
      </p>

      <form onSubmit={handleSubmit} method="POST" className="w-1/2 mb-4 space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="user-name" className="text-[#8C8998] block mb-1.5">
            Your name
          </label>
          <div className="bg-[#1B1B2D] flex items-center rounded-md px-4 space-x-4">
            <User />
            <input
              id="user-name"
              type="text"
              placeholder="John Doe"
              className="h-12 w-full bg-transparent outline-none text-white"
              autoComplete="off"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="user-email" className="text-[#8C8998] block mb-1.5">
            Your email
          </label>
          <div className="bg-[#1B1B2D] flex items-center rounded-md px-4 space-x-4">
            <Mail />
            <input
              id="user-email"
              type="email"
              placeholder="mail@example.com"
              className="h-12 w-full bg-transparent outline-none text-white"
              autoComplete="off"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
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
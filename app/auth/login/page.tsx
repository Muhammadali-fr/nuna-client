"use client";

// components
import Loader from "@/app/components/Loader";

// axios
import axios from "axios";

// lucide
import { Mail } from "lucide-react";

// next and react
import Link from "next/link";
import { useState } from "react";
import LoginForm from "../auth_components/LoginForm";

const page = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default page;

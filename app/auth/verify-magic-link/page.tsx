"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    const getToken = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://nuna-core-server.onrender.com/auth/verify-magic-link/?token=${token}`);
        localStorage.setItem("token", res.data);
      } catch (error) {
        console.log(error);

      } finally { setLoading(false) }
    }
    getToken()
  }, []);

  return (
    <div className="flex flex-col items-start gap-2">
      {loading ? <div className="flex flex-col items-start gap-2">
        <PacmanLoader color="#ffffff" size={30} className="mb-3" />
        <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
          Registering you in...
        </h1>
        <p className="text-[#8C8998]">
          wait for register, and do not close the window
        </p>
      </div> : 
        <p>succesfully signed in</p>
      }
    </div>
  );
}

"use client";
import authService from "@/app/api/services/authService";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function Page() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const searchParams = useSearchParams();
  const verToken = searchParams.get("token");
  const router = useRouter();

  useEffect(() => {
    const verifyAndGetProfile = async () => {
      setLoading1(true);
      try {
        if (verToken) {
          const res = await authService.verify(verToken);
          const token = res.data;
          localStorage.setItem("token", token);
          setLoading1(false);
          setLoading2(true);
        }

        const saved_token = localStorage.getItem("token");
        if (saved_token) {
          const profileRes = await authService.getProfile();
          // shu joytida profileRes ni Redux ga saqlash kerak muhammadali aka
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading2(false);
        router.push("/")
      }
    };

    if (verToken) {
      verifyAndGetProfile();
    }

  }, [verToken]);

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-col items-start gap-2">
        <PacmanLoader color="#ffffff" size={30} className="mb-3" />
        {loading1 && (
          <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
            Verifying your email...
          </h1>
        )}
        {loading2 && (
          <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
            Loading your data...
          </h1>
        )}
        {!loading1 && !loading2 && (
          <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
            Welcome to Nuna
          </h1>
        )}
        <p className="text-[#8C8998]">
          wait for register, and do not close the window
        </p>
      </div>
    </div>
  );
}

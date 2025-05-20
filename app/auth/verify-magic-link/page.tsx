"use client";
import authService from "@/app/api/services/authService";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

// redex 
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/store/feature/userSlice";

export default function Page() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const verToken = searchParams.get("token");
  const router = useRouter();

  // redux 
  const dispatch = useDispatch()

  useEffect(() => {
    const verifyAndGetProfile = async () => {
      setLoading1(true);
      try {
        if (verToken) {
          const res: any = await authService.verify(verToken);
          const token: string = res;
          console.log(token);
          localStorage.setItem("token", token);
          setLoading1(false);
          setLoading2(true);
        }

        const saved_token = localStorage.getItem("token");
        if (saved_token) {
          const profileRes: any = await authService.getProfile();
          //  reduxga saqlandi 
          dispatch(setUser(profileRes));

          setName(profileRes.name);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading2(false);
        router.push("/");
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
        {!loading1 && !loading2 && name !== "" && (
          <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
            Welcome to Nuna, {name}
          </h1>
        )}
        <p className="text-[#8C8998]">
          wait for register, and do not close the window
        </p>
      </div>
    </div>
  );
}

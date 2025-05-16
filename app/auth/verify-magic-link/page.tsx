"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const verToken = searchParams.get("token");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const verifyAndGetProfile = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://nuna-core-server.onrender.com/auth/verify-magic-link/?token=${verToken}`);
        const token = res.data;
        localStorage.setItem("token", token);

        // profile malumotlari 
        const profileRes = await axios.get("https://nuna-core-server.onrender.com/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setProfile(profileRes.data)
        

      } catch (error) {
        console.log(error);

      } finally { setLoading(false) }
    }


    if (verToken) {
      verifyAndGetProfile();
    }
  }, [verToken]);

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
      <div>
        {profile && <p>Welcome, your name is </p>}
      </div>
      }
    </div>
  );
}

"use client";
import { useSearchParams } from "next/navigation";
import { PacmanLoader } from "react-spinners";

export default function Page() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-col items-start gap-2">
        <PacmanLoader color="#ffffff" size={30} className="mb-3" />
        <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
          Registering you in...
        </h1>
        <p className="text-[#8C8998]">
          wait for register, and do not close the window
        </p>
      </div>
    </div>
  );
}

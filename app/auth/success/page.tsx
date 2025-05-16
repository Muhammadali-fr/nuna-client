"use client";
import { useRouter, useSearchParams } from "next/navigation";
import SuccessReg from "../auth_components/Success_reg";

const page = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const router = useRouter();

  if (!email) {
    return router.push("/auth/register");
  }

  return (
    <div>
      <SuccessReg email={email} />
    </div>
  );
};

export default page;

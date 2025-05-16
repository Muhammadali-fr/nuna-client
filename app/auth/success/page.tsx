"use client";
import { useRouter } from "next/navigation";
import SuccessReg from "../auth_components/Success_reg";

const page = () => {
  const router: any = useRouter();
  const email: string = router.email;
  console.log(email);

  return (
    <div>
      <SuccessReg email={email} />
    </div>
  );
};

export default page;

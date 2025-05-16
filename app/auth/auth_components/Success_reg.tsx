"use client";

import Link from "next/link";
import magic_stick from "@/app/icons/magic-stick.png";
import Image from "next/image";

const SuccessReg = ({ email }: { email: string }) => {
  console.log(email);

  return (
    <div className="flex flex-col items-start gap-2">
      <Image
        alt="magic stick img"
        src={magic_stick}
        width={116}
        height={116}
        className="mb-3"
      />
      <h1 className="text-[40px] leading-[100%] font-[robotobold] mb-2">
        Magic link sent to your email
      </h1>
      <p className="text-[#8C8998]">
        we have send magic link to {email} you can click it.
      </p>
      <Link href="https://gmail.com/" className="inline-block">
        Open Gmail page
      </Link>
    </div>
  );
};

export default SuccessReg;

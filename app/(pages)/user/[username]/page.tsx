"use client";
import Image from "next/image";

// icons
import bannerbg from "@/app/icons/banner-bg.png";
import userprph from "@/app/icons/user-pr-ph.jpg";
import PostCard from "@/app/reuseable/PostCard";

// useRouter
import { use } from "react";

// useSelect
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";

// components
import HomeHeader from "@/app/reuseable/HomeHeader";

const page = ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = use(params);

  const user: any = useSelector((state: RootState) => state.user.user)

  return (
    <div className="">
      {/* user profile and banner */}

      <section className="relative w-full h-[250px] flex flex-col items-center -z-10">
        {/* Background image */}
        <Image
          src={bannerbg} // replace with your sunset bg
          alt="Background"
          className="w-full h-2/3 object-cover"
        />

        {/* Profile image wrapper */}
        <div className="w-32 h-32 z-10 rounded-full border-4 border-[#05050D] absolute bottom-3 overflow-hidden bg-[#05050D]">
          <Image
            src={userprph} // replace with your circle image
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* user information */}
      <section className="text-center text-white">
        <h2 className="font-bold text-2xl first-letter:uppercase">
          boburov.dev
        </h2>

        <p className="text-base font-[roboregular] text-blue-400 ">
          {username}
        </p>

        <p className="text-md font-[robolight]  text-[#8989E4] mb-4 text-center px-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <p className="text-sm hover:underline text-white cursor-pointer mb-2">
          more →
        </p>

        <div className="flex justify-center gap-4 mb-7 text-sm">
          <span>
            <strong>718</strong>{" "}
            <span className="text-[#8989E4]">· followers</span>
          </span>
          <span>
            <strong>8</strong>{" "}
            <span className="text-[#8989E4]">· following</span>
          </span>
          <span>
            <strong>12</strong> <span className="text-[#8989E4]">· posts</span>
          </span>
        </div>

        <button className="text-white text-sm font-medium px-20 py-2 transition rounded mb-4   bg-[#0C8CE9] hover:bg-blue-500 ">
          Follow
        </button>
      </section>

      {/* components  */}
      <HomeHeader
        // here is texts of buttons
        first="Posts"
        second="Communities"
        third="Partnerships"
        // this is for links @Boburov you can change this links, and add pages for this links
        firstLink="/user/@username"
        secondLink="/users"
        thirdLink="/communities"
      />

      {/* <PostCard name="boburov.dev" image={userprph} likes={718} comments={91} /> */}

      <div className="mx-auto">
        <PostCard
          PostName={"boburov.dev"}
          UserImage={userprph}
          descr={
            "title of the post that was posted to community by ordinary user who followed to this community by changing select in post page"
          }
          PostImage={userprph}
          SupportNumber={718}
        />
      </div>
    </div>
  );
};

export default page;

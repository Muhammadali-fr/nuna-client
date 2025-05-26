"use client";
import Image from "next/image";

// icons
import bannerbg from "@/app/icons/banner-bg.png";
import userprph from "@/app/icons/user-pr-ph.jpg";
import PostCard from "@/app/reuseable/PostCard";

// hooks
import { use, useEffect, useState } from "react";

// redux
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";

// components
import HomeHeader from "@/app/reuseable/HomeHeader";
import userService from "@/app/api/services/userService";
import postService from "@/app/api/services/postService";

const Page = ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = use(params);

  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState(false);

  const user: any = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const findUser = async () => {
      try {
        if (user && user.username === username) {
          setUserProfile(user);
          setMe(true);
        } else {
          const resuser = await userService.getByUsername(username);
          setUserProfile(resuser);
          setMe(false)
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUserProfile(null);
      } finally {
        setLoading(false);
      }
    };

    findUser();
  }, [user, username]);

  if (loading) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  if (!userProfile) {
    return <p className="text-white text-center mt-10">Foydalanuvchi topilmadi</p>;
  }

  return (
    <div>
      {/* Banner va profil rasmi */}
      <section className="relative w-full h-[250px] flex flex-col items-center -z-10">
        <Image
          src={userProfile.banner ? userProfile.banner : bannerbg}
          alt="Background"
          className="w-full h-2/3 object-cover"
          width={1000}
          height={1000}
        />

        <div className="w-32 h-32 z-10 rounded-full border-4 border-[#05050D] absolute bottom-3 overflow-hidden bg-[#05050D]">
          <Image
            src={userProfile.profile ? userProfile.profile.original || userprph : userprph}
            alt="Profile"
            className="object-cover w-full h-full"
            width={128}
            height={128}
          />
        </div>
      </section>

      {/* Foydalanuvchi ma’lumoti */}
      <section className="text-center text-white">
        <h2 className="font-bold text-2xl first-letter:uppercase">
          {userProfile.name || "Ismingiz"}
        </h2>

        <p className="text-base font-[roboregular] text-blue-400">
          @{userProfile.username}
        </p>

        <p className="text-md font-[robolight] text-[#8989E4] mb-4 text-center px-3">
          {userProfile.bio || "Sizning bio qisqacha bu yerda ko‘rinadi."}
        </p>

        {/* counts here  */}
        <div className="flex justify-center gap-4 mb-7 text-sm">
          <span>
            <strong>{userProfile.followers || 0}</strong>{" "}
            <span className="text-[#8989E4]">· followers</span>
          </span>
          <span>
            <strong>{userProfile.following || 0}</strong>{" "}
            <span className="text-[#8989E4]">· following</span>
          </span>
          <span>
            <strong>{userProfile.post_count || 0}</strong>{" "}
            <span className="text-[#8989E4]">· posts</span>
          </span>
        </div>

        {/* this me is find is this user is me or not if me is true doesnt show follow button  */}
        {
          !me &&
          <button className="w-[95%] mx-auto max-w-[155px] flex items-center justify-center bg-[#0C8CE9] py-3 rounded-lg hover:opacity-90 cursor-pointer gap-3">
            Follow
          </button>
        }
      </section>

      {/* Navigation tugmalari */}
      <HomeHeader
        first="Posts"
        second="Communities"
        third="Partnerships"
        firstLink={`/user/@${userProfile.username}`}
        secondLink="/users"
        thirdLink="/communities"
      />

      {/* PostCard misol uchun */}
      <div className="mx-auto">
        <PostCard
          PostName={userProfile.username}
          UserImage={userProfile.avatar || userprph}
          descr={userProfile.bio || "Foydalanuvchi hali bio yozmagan."}
          PostImage={userProfile.bannerImage || userprph}
          SupportNumber={userProfile.supportCount || 0}
        />
      </div>
    </div>
  );
};

export default Page;

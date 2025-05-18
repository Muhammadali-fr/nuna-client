// next img
import Image from "next/image";

// assets
import ProfileImage from "../icons/sidebar/profile.png";

// icons
import { Menu } from "lucide-react";

// next
import Link from "next/link";

// topics
import { topics } from "../data/data";

// components
import Ads from "./Ads";

// redux 
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

export default function LeftSidebar() {

  const user:any = useSelector((state: RootState) => state.user.user)

  return (
    <aside className="w-full space-y-5 sticky top-5">
      {/* profile informations */}
      <Link
        href={user ? "/user/@username" : "/auth/login"}
        className={`flex items-center gap-3 ${user && "hover:bg-[#1B1B2D]"} py-1 rounded-r-lg cursor-pointer px-3`}
      >
        {/* profile image  */}


        {user ?
          <div className="flex gap-3">
            <Image
              className="w-[48px] h-[48px] rounded-full object-cover object-center"
              src={user.profile || ProfileImage}
              alt="profile image"
            />

            <div className="flex-1">
              {/* name  */}
              <p className="truncate font-bold">{user.name || "name"}</p>

              {/* username  */}
              <p className="text-sm text-gray-400">{user.username || "username"}</p>
            </div>
          </div>
          :

          <button className="w-[95%] bg-[#0C8CE9] py-3 rounded-lg hover:opacity-90 cursor-pointer gap-3">
           login now
          </button>
        }
      </Link>

      {/* topics  */}
      <div className="px-3 space-y-2">
        <p className="text-[20px] font-bold">popular topics today</p>

        {/* topics map here  */}
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, id) => (
            <span
              key={id}
              title={topic}
              className="py-0.5 px-3 bg-[#1B1B2D] hover:bg-[#282849] rounded-3xl cursor-pointer"
            >{`#${topic}`}</span>
          ))}
        </div>
      </div>

      {/* ADS  */}
      <Ads />
    </aside>
  );
}
